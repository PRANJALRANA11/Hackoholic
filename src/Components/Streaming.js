
import React, { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import SpeechRecognition from 'react-speech-recognition';
import Chat from './Chat';
import axios from 'axios';



export default function Streaming_qa({msg}) {

const [message, setMessage] = useState(msg)
const [session_state, set_session_state] = useState(false);
const [sid,setSid] = useState("")
const [ses,set_ses] = useState("")
const [microphone_state, set_microphone_state] = useState(false);
const [session_count, set_session_count] = useState(0);
const [server_res,setServerRes] = useState("")
const [backendSession,setbackendSession] = useState("")



const navigate = useNavigate();
// const user_session_count = "pranjal" + session_count;
// console.log(user_session_count)
// console.log(start_time)
// console.log(end_time)

const microphone = () => {
  if(microphone_state){
    set_microphone_state(false);
    SpeechRecognition.startListening();
  }
  else{
    set_microphone_state(true);
    SpeechRecognition.stopListening();
  }
}

useEffect(() => {
  // Update the local state if the prop value changes
  setMessage(msg);
}, [msg]);


const handleChange = (e) => {
  setMessage(e.target.value)
  console.log(message)
}

const DID_API={
  "key":"dGFjaWJpdDk4NUBmYWhpaC5jb20:UpEm2Kk-xK2w8yLeAQsP9", 
  "url": "https://api.d-id.com"
}

console.log("DiD",process.env.REACT_APP_DID_API_KEY)

// OpenAI API endpoint set up new 10/23 
async function fetchOpenAIResponse(userMessage) {
  const token = localStorage.getItem('token');
  const req_data = {
    token,
    session_id: backendSession,
    message: userMessage
  }
  const response = await axios.post("https://text-to-speech-uajn.onrender.com/v1/cup/thearpy/takesession/promot",req_data)
  console.log(response.data)
  return response.data.message;
}

  
//same  - No edits from Github example for this whole section
const RTCPeerConnection = (
  window.RTCPeerConnection ||
  window.webkitRTCPeerConnection ||
  window.mozRTCPeerConnection
).bind(window);

let peerConnection;
let streamId;
let sessionId;
let sessionClientAnswer;

let statsIntervalId;
let videoIsPlaying;
let lastBytesReceived;

const talkVideo = document.getElementById('talk-video');
// talkVideo.setAttribute('playsinline', '');
const peerStatusLabel = document.getElementById('peer-status-label');
const iceStatusLabel = document.getElementById('ice-status-label');
const iceGatheringStatusLabel = document.getElementById('ice-gathering-status-label');
const signalingStatusLabel = document.getElementById('signaling-status-label');
const streamingStatusLabel = document.getElementById('streaming-status-label');

// const connectButton = document.getElementById('connect-button');
const connectButton = async () => {
  if (peerConnection && peerConnection.connectionState === 'connected') {
    return;
  }

  stopAllStreams();
  closePC();
  try {
  const sessionResponse = await fetch(`${DID_API.url}/talks/streams`, {
    method: 'POST',
    headers: {'Authorization': `Basic ${DID_API.key}`, 'Content-Type': 'application/json'},
    body: JSON.stringify({
      source_url: "https://imgaccess.blob.core.windows.net/image/thumbnail_bg.png",
    }),
  });

  const { id: newStreamId, offer, ice_servers: iceServers, session_id: newSessionId } = await sessionResponse.json()
  streamId = newStreamId;
  setSid(streamId)
  sessionId = newSessionId;
  set_ses(sessionId)
  console.log('session created', streamId);
  
 
    sessionClientAnswer = await createPeerConnection(offer, iceServers);
    setServerRes("Thanks for waiting, you are now connected.")
  } catch (e) {
    console.log('error during streaming setup', e);
    setServerRes("Sorry, we are unable to connect to the server. Please try to refresh the page.")
    stopAllStreams();
    closePC();
    return;
  }

   await fetch(`${DID_API.url}/talks/streams/${streamId}/sdp`,
    {
      method: 'POST',
      headers: {Authorization: `Basic ${DID_API.key}`, 'Content-Type': 'application/json'},
      body: JSON.stringify({answer: sessionClientAnswer, session_id: sessionId})
    });
};

// This is changed to accept the ChatGPT response as Text input to D-ID #138 responseFromOpenAI 
// const talkButton = document.getElementById('talk-button');
const talkButton = async () => {
  // console.log("chalgyaa");
  
  // // Check if a peer connection already exists and is in the connected state
  // if (!peerConnection || (peerConnection && peerConnection.connectionState !== 'connected')) {
  //   stopAllStreams();
  //   closePC();

   
  // Now that the connection is established or reestablished, proceed with the talk logic
  const responseFromOpenAI = await fetchOpenAIResponse(message);

  console.log("OpenAI Response:", responseFromOpenAI);

  await fetch(`${DID_API.url}/talks/streams/${sid}`, {
    method: 'POST',
    headers: { 
      Authorization: `Basic ${DID_API.key}`, 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      script: {
        type: 'text',
        subtitles: 'false',
        provider: { type:"microsoft", voice_id: "en-US-AvaNeural" },
        ssml: false,
        input: responseFromOpenAI
      },
      config: {
        fluent: true,
        pad_audio: 0,
        driver_expressions: {
          expressions: [{ expression: 'surprise', start_frame: 0, intensity: 1 }],
          transition_frames: 0
        },
        align_driver: true,
        align_expand_factor: 0,
        auto_match: true,
        motion_factor: 0,
        normalization_factor: 0,
        sharpen: true,
        stitch: true,
        result_format: 'mp4'
      },
      'driver_url': 'bank://lively/',
      // eslint-disable-next-line no-dupe-keys
      'config':{
        'stitch': true,
      },
      'session_id': ses
    })
  });
  setMessage('');
  setServerRes(responseFromOpenAI);
};

// NOTHING BELOW THIS LINE IS CHANGED FROM ORIGNAL D-id File Example
//

// const destroyButton = document.getElementById('destroy-button');
const destroyButton = async () => {
  await fetch(`${DID_API.url}/talks/streams/${streamId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Basic ${DID_API.key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ session_id: sessionId }),
  });

  stopAllStreams();
  closePC();
};

function onIceGatheringStateChange() {
  iceGatheringStatusLabel.innerText = peerConnection.iceGatheringState;
  iceGatheringStatusLabel.className = 'iceGatheringState-' + peerConnection.iceGatheringState;
}
function onIceCandidate(event) {
  console.log('onIceCandidate', event);
  if (event.candidate) {
    const { candidate, sdpMid, sdpMLineIndex } = event.candidate;
try{
     fetch(`${DID_API.url}/talks/streams/${streamId}/ice`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${DID_API.key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        candidate,
        sdpMid,
        sdpMLineIndex,
        session_id: sessionId,
      }),
    });
  }
  catch(e){
    setServerRes("Sorry, we are unable to connect to the server. Please try to refresh the page.")
    console.log(e)
  }
  }
}
function onIceConnectionStateChange() {
  iceStatusLabel.innerText = peerConnection.iceConnectionState;
  iceStatusLabel.className = 'iceConnectionState-' + peerConnection.iceConnectionState;
  if (peerConnection.iceConnectionState === 'failed' || peerConnection.iceConnectionState === 'closed') {
    stopAllStreams();
    closePC();
  }
}
function onConnectionStateChange() {
  // not supported in firefox
  peerStatusLabel.innerText = peerConnection.connectionState;
  peerStatusLabel.className = 'peerConnectionState-' + peerConnection.connectionState;
}
function onSignalingStateChange() {
  signalingStatusLabel.innerText = peerConnection.signalingState;
  signalingStatusLabel.className = 'signalingState-' + peerConnection.signalingState;
}

function onVideoStatusChange(videoIsPlaying, stream) {
  let status;
  if (videoIsPlaying) {
    status = 'streaming';
    const remoteStream = stream;
    SpeechRecognition.stopListening();
    setVideoElement(remoteStream);

  } else {
    status = 'empty';
    playIdleVideo();
  }
  streamingStatusLabel.innerText = status;
  streamingStatusLabel.className = 'streamingState-' + status;
}


function onTrack(event) {
  /**
   * The following code is designed to provide information about wether currently there is data
   * that's being streamed - It does so by periodically looking for changes in total stream data size
   *
   * This information in our case is used in order to show idle video while no talk is streaming.
   * To create this idle video use the POST https://api.d-id.com/talks endpoint with a silent audio file or a text script with only ssml breaks 
   * https://docs.aws.amazon.com/polly/latest/dg/supportedtags.html#break-tag
   * for seamless results use `config.fluent: true` and provide the same configuration as the streaming video
   */

  if (!event.track) return;

  statsIntervalId = setInterval(async () => {
    const stats = await peerConnection.getStats(event.track);
    stats.forEach((report) => {
      if (report.type === 'inbound-rtp' && report.mediaType === 'video') {
        const videoStatusChanged = videoIsPlaying !== (report.bytesReceived > lastBytesReceived);
        if (videoStatusChanged) {
          videoIsPlaying = report.bytesReceived > lastBytesReceived;
          onVideoStatusChange(videoIsPlaying, event.streams[0]);
          SpeechRecognition.startListening();
        }
        lastBytesReceived = report.bytesReceived;
      }
    });
  }, 500);
}

async function createPeerConnection(offer, iceServers) {
  if (!peerConnection) {
    peerConnection = new RTCPeerConnection({ iceServers });
    peerConnection.addEventListener('icegatheringstatechange', onIceGatheringStateChange, true);
    peerConnection.addEventListener('icecandidate', onIceCandidate, true);
    peerConnection.addEventListener('iceconnectionstatechange', onIceConnectionStateChange, true);
    peerConnection.addEventListener('connectionstatechange', onConnectionStateChange, true);
    peerConnection.addEventListener('signalingstatechange', onSignalingStateChange, true);
    peerConnection.addEventListener('track', onTrack, true);
  }

  await peerConnection.setRemoteDescription(offer);
  console.log('set remote sdp OK');

  const sessionClientAnswer = await peerConnection.createAnswer();
  console.log('create local sdp OK');

  await peerConnection.setLocalDescription(sessionClientAnswer);
  console.log('set local sdp OK');

  return sessionClientAnswer;
}

// if(talkVideo.src === 'Idle.mp4'){
//   SpeechRecognition.startListening();
// }



function setVideoElement(stream) {
  if (!stream) return;
  talkVideo.srcObject = stream;
  talkVideo.loop = false;



  // safari hotfix
  if (talkVideo.paused) {
    talkVideo
      .play()
      .then((_) => {})
      .catch((e) => {});
  }
}

function playIdleVideo() {
  talkVideo.srcObject = undefined;
  talkVideo.src = 'https://imgaccess.blob.core.windows.net/image/idleWoman.mp4';
  talkVideo.loop = true;
}

function stopAllStreams() {
  if (talkVideo.srcObject) {
    console.log('stopping video streams');
    talkVideo.srcObject.getTracks().forEach((track) => track.stop());
    talkVideo.srcObject = null;
  }
}

function closePC(pc = peerConnection) {
  if (!pc) return;
  console.log('stopping peer connection');
  pc.close();
  pc.removeEventListener('icegatheringstatechange', onIceGatheringStateChange, true);
  pc.removeEventListener('icecandidate', onIceCandidate, true);
  pc.removeEventListener('iceconnectionstatechange', onIceConnectionStateChange, true);
  pc.removeEventListener('connectionstatechange', onConnectionStateChange, true);
  pc.removeEventListener('signalingstatechange', onSignalingStateChange, true);
  pc.removeEventListener('track', onTrack, true);
  clearInterval(statsIntervalId);
  iceGatheringStatusLabel.innerText = '';
  signalingStatusLabel.innerText = '';
  iceStatusLabel.innerText = '';
  peerStatusLabel.innerText = '';
  console.log('stopped peer connection');
  if (pc === peerConnection) {
    peerConnection = null;
  }
}

// const maxRetryCount = 3;
// const maxDelaySec = 4;
// // Default of 1 moved to 5
// async function fetchWithRetries(url, options, retries = 3) {
//   try {
//     return await fetch(url, options);
//   } catch (err) {
//     if (retries <= maxRetryCount) {
//       const delay = Math.min(Math.pow(2, retries) / 4 + Math.random(), maxDelaySec) * 1000;

//       await new Promise((resolve) => setTimeout(resolve, delay));

//       console.log(`Request failed, retrying ${retries}/${maxRetryCount}. Error ${err}`);
//       return fetchWithRetries(url, options, retries + 1);
//     } else {
//       throw new Error(`Max retries exceeded. error: ${err}`);
//     }
//   }
// }
  const startTherapy = async () => {
    let token = localStorage.getItem('token');
    console.log(token)
    const url = `https://text-to-speech-uajn.onrender.com/v1/cup/thearpy/${token}`
    console.log(url)
    const response = await axios.get(url)
    console.log(response.data.session_id)
    setbackendSession(response.data.session_id)
  }

  return (
    <div>
      <div>
    <div id="content">
      <div id="video-wrapper">
        <div>
          <video id="talk-video" width="400" height="400" autoPlay loop   src='https://imgaccess.blob.core.windows.net/image/idleWoman.mp4'></video>
          {/* <video id="talk-video" width="400" height="400" autoPlay loop class="css-2g4t5i e3rlp0e0"  src='IdleWoman.mp4'></video> */}
        </div>
      </div>
      <br />
      <div>
      </div>
        {/* <button id="connect-button" onClick={connectButton} type="button">Connect</button> */}
        {/* <button  id="talk-button" onClick={talkButton} type="button">Start</button> */}
        <div className=' fixed top-[33rem] right-0'>
        { session_state?
        <button type="button" class=" text-white w-[20rem] mr-5 bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"   onClick={() => {navigate("/dashboard");}}>Let's End</button>
           :
        <button type="button" id="connect-button" class="text-white w-[20rem] mr-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 " onClick={() => {set_session_state(true); startTherapy(); set_session_count(session_count+1); connectButton()}}>{session_state? 'Started':'Start Talking'}</button>
       }
      </div >
        <button id="destroy-button" className='hidden' onClick={destroyButton} type="button">Destroy</button>
        <div class=" flex mt-4">
        <input type="search" id="search" value={message} onChange={handleChange} class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Hy what's on your mind" required/>
        {microphone_state?<i class="fa-solid mt-5 fixed left-[56rem]    fa-microphone-slash" onClick={microphone }> </i>: <i class="fa-solid fa-microphone  fixed left-[56rem]   mt-5" onClick={microphone} ></i>
     }
        <button type="submit" id="talk-button" onClick={talkButton} class=" text-white fixed left-[58rem] mt-2 ml-2  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4  py-2 ">Send</button>
    </div>
      </div>

      <div className='hidden' id="status">
        ICE gathering status: <label id="ice-gathering-status-label"></label
        ><br />
        ICE status: <label id="ice-status-label"></label><br />
        Peer connection status: <label id="peer-status-label"></label><br />
        Signaling status: <label id="signaling-status-label"></label><br />
        Streaming status: <label id="streaming-status-label"></label><br />
      </div>
      <Chat messageFromServer={server_res} transcript={message}/>
    </div>
    </div>
  )
}
