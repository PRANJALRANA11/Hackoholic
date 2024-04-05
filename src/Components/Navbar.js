import React,{useEffect,useState} from 'react'
import axios from 'axios'

export default function Navbar() {
  const[res,setres]=useState("")

  useEffect(() => {
    const getName = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`https://text-to-speech-uajn.onrender.com/v1/cup/users/${token}`);
        setres(response.data.name)
        console.log(response.data); // Assuming the metrics are in the response data
      } catch (error) {
        console.error('Error fetching metrics:', error);
      }
    }
    getName();
  }, []);

  

  return (
    <div>
      

<nav class="bg-white  border-gray-200  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <h1 className="text-4xl  font-semibold font-poppins">Healix</h1>
  <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
  <p class=" text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">Hey {res} !</p>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
    </ul>
  </div>
  </div>
</nav>
    </div>
  )
}
