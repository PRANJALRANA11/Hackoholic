import React from 'react'
import MindCompo from './Mind_Compo';

export default function Exer_B() {
    const time = new Date();
    const url = "b-244.mp3";
    time.setSeconds(time.getSeconds() + 300);
    const expiryTimestamp = time;
  return (
    <div>
      <MindCompo expiryTimestamp={expiryTimestamp} url={url}/>
    </div>
  )
}