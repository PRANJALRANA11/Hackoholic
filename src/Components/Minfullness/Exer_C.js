import React from 'react'
import MindCompo from './Mind_Compo';

export default function Exer_C() {
    const time = new Date();
    const url = "C-11.mp3";
    time.setSeconds(time.getSeconds() + 800);
    const expiryTimestamp = time;
  return (
    <div>
      <MindCompo expiryTimestamp={expiryTimestamp} url={url}/>
    </div>
  )
}