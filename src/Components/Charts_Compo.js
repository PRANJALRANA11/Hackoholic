import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Active from './Active';
import Emotion from './Emotion';
import Engagement from './Engagement';
import Excercises from './Excercises';


export default function Charts_Compo() {
  // const[res,setres]=useState("")
  const[res_met,set_met_res]=useState({})
  const[date,set_date]=useState("")

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
  

 
  useEffect(() => {
    const getMetrics = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`https://text-to-speech-uajn.onrender.com/v1/cup/metrix/${token}`);
        // set_met_res(response)
        set_met_res(response.data)
        console.log(response.data); // Assuming the metrics are in the response data
      } catch (error) {
        console.error('Error fetching metrics:', error);
      }
    }

    getMetrics();
  }, []);

  useEffect(() => {
    if (res_met.list_of_duration_of_each_session && res_met.list_of_duration_of_each_session.length > 0) {
      const lastSession = res_met.list_of_duration_of_each_session[res_met.list_of_duration_of_each_session.length - 1];
      const lastSessionStartTime = lastSession.start_time;
      const dateTimeString = lastSessionStartTime;
      const dateTime = new Date(dateTimeString);
      const dateOnly = dateTime.toISOString().split('T')[0];
      set_date(dateOnly);
    }
  }, [res_met]);


  return (
    <>
    <div  className=''>
        <div className='flex ml-40 text-center'>
        <div class="max-w-sm w-full h-[15rem] bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 mt-5 mr-4">
  <div class="flex justify-between">
    <div>
    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{date}</h1>
    <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Your Last Talk with us</p>
    </div>
  </div>
  {/* <button type="button" onClick={()=>navigate('/main')} class="text-white w-40 ml-40 mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Start New Session</button> */}
  </div>
        <div class="max-w-sm w-full h-[15rem] bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 mt-5 mr-4">
  <div class="flex justify-between">
    <div>
    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{res_met.total_time_user_in_session} Seconds</h1>
    <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Total Time you engage</p>
    </div>
  </div>
  {/* <button type="button" onClick={()=>navigate('/main')} class="text-white w-40 ml-40 mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Start New Session</button> */}
  </div>
        <div class="max-w-sm w-full h-[15rem] bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 mt-5 mr-4">
  <div class="flex justify-between">
    <div>
    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{res_met.total_session_attended} Total Talks</h1>
    <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Till Now</p>
    </div>
  </div>
  {/* <button type="button" onClick={()=>navigate('/main')} class="text-white w-40 ml-40 mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Start New Session</button> */}
  </div>
        
  </div>
  <h1 class="mb-4 ml-10 mt-20 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Metrics</span> Only For You.</h1>
  <div>
    
  <Active/>
  <Emotion/>
  <Engagement/>
  </div>
  <h1 class="mb-4 ml-10 mt-20 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Mindfullness</span> Only For You.</h1>
  <Excercises/>
         </div>
         <div className='mt-40'>
        <img src="Ms.png" className='ml-10 w-60 h-auto' alt='1'/>
      <footer class="text-[black] body-font">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a class="flex title-font font-medium items-center md:justify-start justify-center text-[black]" href='/'>
      <span class="ml-3 text-xl">Healix</span>
    </a>
    <p class="text-sm text-[black] sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-600 sm:py-2 sm:mt-0 mt-4">© 2024 Healix —
      <a href="https://twitter.com/knyttneve" class="text-[black] ml-1" rel="noopener noreferrer" target="_blank">@Healix</a>
    </p>
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a href='https://twitter.com/Heal_ix' class="ml-3 text-[black]">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a href='https://www.linkedin.com/company/healix1' class="ml-3 text-[black]">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>
    </div>
     </>
  );
}
