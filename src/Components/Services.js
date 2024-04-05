import React from 'react'
import Pricing from './Pricing'
export default function Services() {
  return (
    <div className ="w-[60%] h-screen bg-[#4f4faf] ">
      <section id='Section' class="text-gray-600 body-font">
  <div class="container px-10 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-40">
      <h1 class="sm:text-3xl text-3xl  font-semibold  text-white">Our Services</h1>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full   flex-col">
          <div className='bg-white w-10 h-10 ml-24 mb-5 rounded-3xl'>
            <img src="https://img.icons8.com/fluency/48/000000/brain.png" alt='2'/>
          </div>
          <div class="flex items-center mb-5">
            <h2 class="text-white text-2xl ml-16">Mentalysis</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base text-white text-center">Get your mental health analysis you have seen never before</p>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full   flex-col">
        <div className='bg-white w-10 h-10 ml-28 mb-5 rounded-3xl'>
        <img width="48" height="48" src="https://img.icons8.com/fluency/48/person-male.png" alt="person-male"/>
          </div>
          <div class="flex items-center mb-5">
            <h2 class="text-white text-2xl ml-10">Personalised Bot</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base text-white text-center">Talk to a more personalised bot</p>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full  flex-col">
        <div className='bg-white w-10 h-10 ml-24 mb-5 rounded-3xl'>
        <img width="48" height="48" src="https://img.icons8.com/color/48/who-skin-type-1.png" alt="who-skin-type-1"/>
          </div>
          <div class="flex items-center mb-5">
            <h2 class="text-white text-2xl ml-8">Fully Anonymous</h2>
          </div>
          <div class="flex-grow">
            <p class=" text-white text-center">This platform is fully anonymous anyone can join </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<Pricing/>
    </div>
  )
}
