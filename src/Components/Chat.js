import React from "react";
import Typewriter from "typewriter-effect";

export default function Chat({ messageFromServer, transcript }) {
  return (
    <>
      <div className="w-full h-full">
        <div class="bg-gray-900 border h-full text-white border-gray-200 w-full  px-4 py-2 rounded-[12px] shadow overflow-hidden">
          <p className="font-light animation-spin">
            <Typewriter
              options={{
                strings: [messageFromServer],
                autoStart: true,
                loop: true,
                delay: 95,
              }}
            />
          </p>
        </div>
      </div>
    </>
  );
}
