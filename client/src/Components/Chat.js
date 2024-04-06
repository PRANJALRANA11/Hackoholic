import React, { useRef, useEffect } from "react";
import { TextGenerateEffect } from "./text-generate-effect";

export default function Chat({ chatsHistory }) {
  const lastMessageRef = useRef(null);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatsHistory]);
  return (
    <>
      <div className="w-full h-full">
        <div class="bg-gray-900 border text-white border-gray-200 w-full  px-4 py-2 rounded-md overflow-y-auto h-[calc(100vh-278px)]">
          {chatsHistory.map((chat, idx) => {
            return (
              <div key={idx} class="flex flex-col gap-2 py-2" ref={idx === chatsHistory.length - 1 ? lastMessageRef : null}>
                <div class="flex-1">
                  <p class="text-gray-300 text-2xl">{chat.question}</p>
                </div>
                <div class="flex-1">
                  <p
                    class="text-white
                  "
                  >
                    {chat.ans}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
