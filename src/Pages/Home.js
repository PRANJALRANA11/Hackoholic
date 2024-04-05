import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Services from "../Components/Services";
import { useNavigate } from "react-router-dom";

export default function Home() {
   return (
    <>
      <Navbar />
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
              onClick={() => navigate("/login")}
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
      <section className="w-full h-[calc(100vh-74px)] bg-gray-950 flex items-center justify-center flex-col space-y-4">
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
            onClick={() => navigate("/login")}
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
