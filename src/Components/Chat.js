import React from "react";
import { TextGenerateEffect } from "./text-generate-effect";
 

export default function Chat({ messageFromServer, transcript }) {
  return (
    <>
      <div className="w-full h-full">
        <div class="bg-gray-900 border text-white border-gray-200 w-full  px-4 py-2 rounded-md overflow-y-auto h-[calc(100vh-278px)]">
          <TextGenerateEffect words={messageFromServer}/>
        </div>
      </div>
    </>
  );
}
