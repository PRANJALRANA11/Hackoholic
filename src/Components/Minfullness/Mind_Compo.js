import React,{useState,useEffect} from 'react'
import { useTimer } from 'react-timer-hook';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

export default function Mind_Compo({expiryTimestamp,url}) {
    const [timer,setTimer] = useState(false);
    // const [isPlaying, setIsPlaying] = useState(false);
    console.log(url)
    const navigate = useNavigate();
    
    // const time = new Date();
    // time.setSeconds(time.getSeconds() + 600);
    // const expiryTimestamp = time; // 10 minutes
    useEffect(() => {
      const getName = async () => {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get(`https://text-to-speech-uajn.onrender.com/v1/cup/users/${token}`);
          console.log(response.data); // Assuming the metrics are in the response data
        } catch (error) {
          console.error('Error fetching metrics:', error);
        }
      }
      getName();
    }, []);
    const {
        seconds,
        minutes,
        start,
        pause,
      } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

      const toggleAudio = () => {
        const audioElement = document.getElementById('myAudio');
        audioElement.play();
        };

      const pauseAudio = () => {
        const audioElement = document.getElementById('myAudio');
        audioElement.pause();
        };
  return (
    <div className='mt-40 ml-10' >
        <button type="button" onClick={()=>navigate("/dashboard")} class="text-white bg-gradient-to-br fixed right-0 bottom-1 w-40 from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Exit</button>
        {timer ? <h1 class="mb-4 text-[10rem] ml-[34rem] font-extrabold text-gray-900 dark:text-white "><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{minutes} :</span> {seconds}</h1>:<h1 class="mb-4 text-[10rem] font-extrabold ml-80 text-gray-900 dark:text-white "><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Let's Start</span> </h1>}
       {/* <h1 class="mb-4 text-[10rem] font-extrabold text-gray-900 dark:text-white "><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Let's Start</span> Pranjal.</h1> */}
       {/* <h1 class="mb-4 text-[10rem] ml-[30rem] font-extrabold text-gray-900 dark:text-white "><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{minutes} :</span> {seconds}</h1> */}
       <audio src={url} id="myAudio"></audio>
       {/* <h1 class="mb-4 text-[10rem] font-extrabold text-gray-900 dark:text-white "><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">00</span>5</h1> */}
       <div className='flex'>
       <button type="button" onClick = {() => {start(); setTimer(true);toggleAudio();}} class="text-gray-900 w-[20rem]  h-[3rem] ml-[25rem] bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start</button>
       <button type="button" onClick={()=>{pause();pauseAudio()}} class="text-white bg-gradient-to-r h-[3rem] w-[20rem]   from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Stop</button>
       </div>
    </div>
  )
}
