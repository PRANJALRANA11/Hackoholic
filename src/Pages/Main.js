import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Streaming from '../Components/Streaming';
import Streamingqa from '../Components/Streaming_qa';






export default function Main() {

  const [msg, setMsg] = useState('');
  const[stream,setStream]= useState(false)


  const handleStream = ()=>{
    if(stream===false){
      setStream(true)
    }
    else{
      setStream(false)
    }
  }

  




  // const user_session_count = User.given_name + session_count;


 


   
  // useEffect(() => {
  //   const CHUNK_SIZE = 1024;
  //   const url = "https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM";
  
  //   const headers = {
  //     "Accept": "audio/mpeg",
  //     "Content-Type": "application/json",
  //     "xi-api-key": "dab7ef883b5cec33d6eb5428c8b0bcef"
  //   };
  
  //   const data = {
  //     "text": messageFromServer,
  //     // "text": "Hello there my name is pranjal and i am 5 ",
  //     "model_id": "eleven_monolingual_v1",
  //     "voice_settings": {
  //       "stability": 0.5,
  //       "similarity_boost": 0.5
  //     }
  //   };
  
  //   const fetchData = async () => {
  //     try {

  //       const response = await fetch(url, {
  //         method: 'POST',
  //         headers: headers,
  //         body: JSON.stringify(data)
  //       });
  
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  
  //       const reader = response.body.getReader();
  //       const chunks = [];
  
  //       while (true) {
  //         const { done, value } = await reader.read();
  
  //         if (done) {
  //           break;
  //         }
  
  //         chunks.push(value);
  //       }
  
  //       const audioBlob = new Blob(chunks, { type: 'audio/mpeg' });
  //       const audioUrl = URL.createObjectURL(audioBlob);
  
  //       // Now you can use the audioUrl, for example, set it as the source for an <audio> element
  //       const audioElement = new Audio(audioUrl);
  //       audioElement.addEventListener('play', () => {
  //         SpeechRecognition.stopListening();
  //       });
  //       audioElement.addEventListener('ended', () => {
  //         SpeechRecognition.startListening();
  //       });

        
  //        if(session_state === true){
  //         audioElement.play();
  //         set_speech_text(messageFromServer);
  //        }


  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData();
   
  // }, [messageFromServer]); 
  
  // useEffect(() => {
  //   const CHUNK_SIZE = 1024;
  //   const url = "https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM";
  
  //   const headers = {
  //     "Accept": "audio/mpeg",
  //     "Content-Type": "application/json",
  //     "xi-api-key": "dab7ef883b5cec33d6eb5428c8b0bcef"
  //   };
  
  //   const data = {
  //     // "text": messageFromServer,
  //     "text": `Hello Pranjal, How are you today please feel free to talk to me about anything you want to talk about lets start the session`,
  //     "model_id": "eleven_monolingual_v1",
  //     "voice_settings": {
  //       "stability": 0.5,
  //       "similarity_boost": 0.5
  //     }
  //   };
  
  //   const fetchData = async () => {
  //     try {

  //       const response = await fetch(url, {
  //         method: 'POST',
  //         headers: headers,
  //         body: JSON.stringify(data)
  //       });
  
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  
  //       const reader = response.body.getReader();
  //       const chunks = [];
  
  //       while (true) {
  //         const { done, value } = await reader.read();
  
  //         if (done) {
  //           break;
  //         }
  
  //         chunks.push(value);
  //       }
  
  //       const audioBlob = new Blob(chunks, { type: 'audio/mpeg' });
  //       const audioUrl = URL.createObjectURL(audioBlob);
  
  //       // Now you can use the audioUrl, for example, set it as the source for an <audio> element
  //       const audioElement = new Audio(audioUrl);
  //       audioElement.addEventListener('play', () => {
  //         SpeechRecognition.stopListening();
  //       });
  //       audioElement.addEventListener('ended', () => {
  //         SpeechRecognition.startListening();
  //       });


        
  //        if(session_state === true){
  //         audioElement.play();
  //         set_speech_text(messageFromServer);
  //        }

  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData();
   
  // }, [session_state]); 


  // useEffect(() => {
  //   const newSocket = new WebSocket('wss://text-to-speech-uajn.onrender.com/text');
  //   newSocket.addEventListener('open', (event) => {
  //     console.log('WebSocket connection opened:', event);
  //   });
  //   newSocket.addEventListener('message', (event) => {
  //     const message = event.data;
  //     console.log('Message from server:', event.data);
  //     setMessageFromServer(message);
  //   });

  //   newSocket.addEventListener('error', (event) => {
  //     console.error('WebSocket error:', event);
  //   });
  //   setSocket(newSocket);

  //   return () => {
  //     newSocket.close();
  //   };
  // }, []);


  

 



  // const sendMessage = (message) => {
  //   if (socket && socket.readyState === WebSocket.OPEN) {
  //     socket.send(message);
  //   } else {
  //     console.error('WebSocket not open. Message not sent.');
  //   }
  // };

  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  useEffect(() => {
    if (!listening && transcript) {
      // sendMessage(transcript);
      setMsg(transcript);
      console.log(transcript);
      SpeechRecognition.startListening();
    }
      SpeechRecognition.startListening();
  }, [transcript, listening]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <>
      {/* <Modal /> */}
      <div className='pl-20 text-4xl mt-10 font-semibold font-poppins'>
        Healix
      </div>
      <div id="JarvisHood" className='ml-[33%] mt-10'>
        <button  className="square" >
          <span className={` ${listening ?'listen_animation1':'talk_animation1'}`}></span>
          <span className={` ${listening ?'listen_animation2':'talk_animation3'}`}></span>
          <span className={` ${listening ?'listen_animation3':'talk_animation3'}`}></span>
          {/* <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString("Hello there I am your companion Let's Talk !")
      .callFunction(() => {
        console.log('String typed out!');
      })
      // .pauseFor(2500)
      // .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/> */}
{stream ? <Streamingqa msg={msg}/> :<Streaming msg={msg}/>}


{/* <Streaming_qa msg={msg}/> */}

        </button>
      </div>
      <div>
      {/* <Chat messageFromServer={speech_text} transcript={transcript}/> */}
      <div className='ml-[25rem]'>
      </div>
      {/* <div className=' fixed top-[33rem] right-0'>
        { session_state?
        <button type="button" class=" text-white w-[20rem] mr-5 bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"   onClick={() => {navigate("/questionairre"); set_session_end_time(new Date());}}>Stop Session</button>
           :
        <button type="button" class="text-white w-[20rem] mr-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 " onClick={() => {set_session_state(true); set_session_start_time(new Date());  set_session_count(session_count+1);}}>{session_state? 'Session Started':'Start Session'}</button>
       }
      </div> */}
      {stream ?
      <button type="button"  onClick={handleStream} class="text-gray-900 bg-gradient-to-r fixed left-2 mt-20 w-40 from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Lime</button>
      :<button type="button"  onClick={handleStream} class="text-gray-900 bg-gradient-to-r fixed left-2 mt-20 w-40 from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sky</button>
      }
     <div>
     </div>

     <div className=' fixed top-[40rem] left-[45rem] hover:cursor-pointer'>
     {/* {microphone_state?<i class="fa-solid fa-2xl fa-microphone-slash" onClick={microphone }> </i>: <i class="fa-solid fa-microphone fa-2xl" onClick={microphone} ></i>
     } */}
     </div>
      
      
      </div>
      {/* <p>Microphone: {listening ? 'on' : 'off'}</p> */}
    </>
  );

}
