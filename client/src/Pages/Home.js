import React from "react";
import { useNavigate } from "react-router-dom";
// import { useWhisper } from "@chengsokdara/use-whisper/dist/useWhisper";

export default function Home() {
  // const {
  //   recording,
  //   speaking,
  //   transcribing,
  //   transcript,
  //   pauseRecording,
  //   startRecording,
  //   stopRecording,
  // } = useWhisper({
  //   apiKey: process.env.OPENAI_API_TOKEN, // YOUR_OPEN_AI_TOKEN
  //   whisperConfig: {
  //     language: "en",
  //   },
  //   nonStop: true, // keep recording as long as the user is speaking
  //   stopTimeout: 5000, // auto stop after 5 seconds
  // });

  return (
    <>
      <Navbar />
      {/* <div>
        <p>Recording: {recording}</p>
        <p>Speaking: {speaking}</p>
        <p>Transcribing: {transcribing}</p>
        <p>Transcribed Text: {transcript.text}</p>
        <button onClick={() => startRecording()}>Start</button>
        <button onClick={() => pauseRecording()}>Pause</button>
        <button onClick={() => stopRecording()}>Stop</button>
      </div> */}
      <Hero />
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
              onClick={() => navigate("/register")}
              className="border bprder-gray-700 w-fit px-8 py-2 rounded-full text-white"
              type="button"
            >
              Connect
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

function Hero() {
  const navigate = useNavigate();

  return (
    <>
      <section className="w-full h-[calc(100vh-75px)] bg-gray-950 flex items-center justify-center flex-col space-y-4">
        <svg viewBox="0 0 320 320" className="w-[400px] h-[400px]">
          <defs>
            <circle id="circle-clip" cx="50%" cy="50%" r="25%" />
            <clipPath id="avatar-clip">
              <use href="#circle-clip" />
            </clipPath>
          </defs>

          <circle cx="50%" cy="50%" r="25%" fill="white" fill-opacity="1">
            <animate
              attributeName="r"
              values="25%;50%"
              dur="4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fill-opacity"
              values="1;0"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>

          <circle cx="50%" cy="50%" r="25%" fill="white" fill-opacity="1">
            <animate
              attributeName="r"
              values="25%;50%"
              dur="4s"
              begin="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fill-opacity"
              values="1;0"
              dur="4s"
              begin="1s"
              repeatCount="indefinite"
            />
          </circle>

          <circle cx="50%" cy="50%" r="25%" fill="white" fill-opacity="1">
            <animate
              attributeName="r"
              values="25%;50%"
              dur="4s"
              begin="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fill-opacity"
              values="1;0"
              dur="4s"
              begin="2s"
              repeatCount="indefinite"
            />
          </circle>

          <circle cx="50%" cy="50%" r="25%" fill="white" fill-opacity="1">
            <animate
              attributeName="r"
              values="25%;50%"
              dur="4s"
              begin="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fill-opacity"
              values="1;0"
              dur="4s"
              begin="3s"
              repeatCount="indefinite"
            />
          </circle>

          <image
            height="50%"
            width="50%"
            x="25%"
            y="25%"
            href="/french.png"
            clip-path="url(#avatar-clip)"
          />
        </svg>
        <h1 className="text-4xl font-bold text-white -tracking-tighter max-w-4xl">
          Healix: A Mental Health Support System
        </h1>
        <p className="text-xl text-gray-400 max-w-4xl font-semibold tracking-tight text-center w-1/2">
          Providing Emotional Support Anytime, Anywhere
        </p>

        <div className="flex space-x-4">
          <button
            onClick={() => navigate("/register")}
            className="border border-gray-700 w-fit px-8 py-2 rounded-full text-white"
            type="button"
          >
            Connect
          </button>
        </div>
      </section>
    </>
  );
}
