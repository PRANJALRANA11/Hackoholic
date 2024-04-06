import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SpeechRecognition from "react-speech-recognition";
import axios from "axios";
import Chat from "./Chat";

export default function Streaming_qa({ msg }) {
  const [message, setMessage] = useState(msg);
  const [session_state, set_session_state] = useState(false);
  const [sid, setSid] = useState("");
  const [ses, set_ses] = useState("");
  const [microphone_state, set_microphone_state] = useState(false);
  const [session_count, set_session_count] = useState(0);
  const [server_res, setServerRes] = useState("");
  const [backendSession, setbackendSession] = useState("");

  const navigate = useNavigate();
  // const user_session_count = "pranjal" + session_count;
  // console.log(user_session_count)
  // console.log(start_time)
  // console.log(end_time)

  const microphone = () => {
    if (microphone_state) {
      set_microphone_state(false);
      SpeechRecognition.startListening();
    } else {
      set_microphone_state(true);
      SpeechRecognition.stopListening();
    }
  };
  useEffect(()=>{
    const startTherapy = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      `https://text-to-speech-uajn.onrender.com/v1/cup/thearpy/${token}`,
    );
    setbackendSession(response.data.session_id);
  };
  startTherapy();
  },[])

  useEffect(() => {
    // Update the local state if the prop value changes
    setMessage(msg);
  }, [msg]);

  const handleChange = (e) => {
    setMessage(e.target.value);
    console.log(message);
  };

  
  // OpenAI API endpoint set up new 10/23
  async function fetchOpenAIResponse(userMessage) {
    const token = localStorage.getItem("token");
    const req_data = {
      token,
      session_id: backendSession,
      message: userMessage,
    };
    const response = await axios.post(
      "https://text-to-speech-uajn.onrender.com/v1/cup/thearpy/takesession/rag",
      req_data
    );
    console.log(response.data);
    setServerRes(response.data.message);
    setMessage("");
  }

  return (
    <>
      <Chat messageFromServer={server_res} transcript={message} />
      <div class="flex relative">
        <input
          type="search"
          id="search"
          value={message}
          onChange={handleChange}
          class="block w-full p-4 ps-10 text-sm text-gray-950 border border-gray-300 rounded-md bg-white focus:ring-blue-500 focus:border-blue-500 "
          placeholder="Hy what's on your mind"
          required
        />
        <section className="absolute right-[15px] top-[2px] flex gap-4">
          {microphone_state ? (
            <i
              class="fa-solid mt-5 fa-microphone-slash"
              onClick={microphone}
            >
              {" "}
            </i>
          ) : (
            <i class="fa-solid fa-microphone mt-5" onClick={microphone}></i>
          )}
          <button
            type="submit"
            id="talk-button"
            onClick={() => fetchOpenAIResponse(message)}
            class=" text-white mt-2 ml-2  bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4  py-2 "
          >
            Send
          </button>
        </section>
      </div>
    </>
  );
}
