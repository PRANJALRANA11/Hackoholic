import React from 'react'
import MindCompo from './Mind_Compo';

export default function Exer_D() {
    const time = new Date();
    const url = "D-2036.mp3";
    time.setSeconds(time.getSeconds() + 1000);
    const expiryTimestamp = time;
  return (
    <div>
      <MindCompo expiryTimestamp={expiryTimestamp} url={url}/>
    </div>
  )
}