import React from 'react'
import MindCompo from './Mind_Compo';

export default function Exer_E() {
    const time = new Date();
    const url = "E-4733.mp3";
    time.setSeconds(time.getSeconds() + 1000);
    const expiryTimestamp = time;
  return (
    <div>
      <MindCompo expiryTimestamp={expiryTimestamp} url={url}/>
    </div>
  )
}