import React, { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Streaming from "../Components/Streaming";
import Streamingqa from "../Components/Streaming_qa";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const [msg, setMsg] = useState("");
  const [stream, setStream] = useState(false);

  const handleStream = () => {
    if (stream === false) {
      setStream(true);
    } else {
      setStream(false);
    }
  };

  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

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
      <Navbar />
      <section className="bg-gray-950 h-[calc(100vh-75px)] p-4 ">
        <section className="w-full bg-gray-900 rounded-[12px] h-full container mx-auto p-4 relative flex flex-col gap-4 justify-between">
          <section className="grid grid-cols-2 gap-4">
            <button type="button" onClick={handleStream} className="button-34 flex justify-center items-center gap-2 ">

              Lime
              {!stream && (

                <div className=" bg-green-400 rounded-full h-[6px] w-[6px] mb-2 ">
</div>
  )}

            </button>
            <button type="button" onClick={handleStream} class="button-34 flex justify-center items-center gap-2">
              Sky
              {stream && (

<div className=" bg-green-400 rounded-full h-[6px] w-[6px] mb-2 ">
</div>
)}
            </button>
          </section>

          {stream ? <Streamingqa msg={msg} /> : <Streaming msg={msg} />}
        </section>
      </section>
    </>
  );
}

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="sticky top-0 bg-gray-950 border-b border-slate-800 ">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div>
              <a href="/" className="text-2xl font-bold text-white">
                Healix
              </a>
            </div>
            <button
              onClick={() => navigate("/dashboard")}
              className="border bprder-gray-700 w-fit px-8 py-2 rounded-full text-white"
              type="button"
            >
              Dashboard
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
