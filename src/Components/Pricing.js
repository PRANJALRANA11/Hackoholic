import React from 'react'
import Testimonials from './Testimonials'

export default function About() {
  return (
    <div>
      <section id="Section1" class="text-gray-600 body-font bg-[#4f4faf] overflow-hidden">
  <div class="container px-5 py-24 mx-auto ">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-4xl text-3xl font-semibold  mb-2 text-white">Pricing</h1>
    </div>
    <div class="flex ml-14  -m-4">
      <div class="p-4 xl:w-1/4 md:w-1/2 mr-[8rem] ">
      <div class="h-full p-6 rounded-lg border-2 w-[20rem] border-white flex flex-col relative overflow-hidden">
          <span class="bg-white text-black px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">FREE</span>
          <h1 class="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
            <span>$0</span>
            <span class="text-lg ml-1 font-normal text-white">/mo</span>
          </h1>
          <p class="flex items-center text-white mb-6">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-black rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>1 hrs TPD (Talk per day)
          </p>
          <p class="flex items-center text-white mb-6">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-black rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Access to Sky
          </p>
          <p class="flex items-center text-white mb-6">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-black rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span> Access to Mindfullness Excercises
          </p>
          <button class="flex items-center mt-auto text-white bg-[rgb(60,70,255)] border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">Let's Start
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <p class="text-xs text-gray-200 mt-3">Terms and conditions apply.</p>
        </div>
      </div>
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 w-[20rem] border-indigo-500 flex flex-col relative overflow-hidden">
          <span class="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">PRO</span>
          <h1 class="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
            <span>$3</span>
            <span class="text-lg ml-1 font-normal text-white">/mo</span>
          </h1>
          <p class="flex items-center text-white mb-6">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-black rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>All starter pack + 5 hrs TPD (Talks per day)
          </p>
          <p class="flex items-center text-white mb-6">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-black rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Get full Mentalysis
          </p>
          <p class="flex items-center text-white mb-6">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-black rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Access to Lime
          </p>
          <button class="flex items-center mt-auto text-white bg-[rgb(60,70,255)]  border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">Let's Start
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <p class="text-xs text-gray-300 mt-3">Terms and conditions apply.</p>
        </div>
      </div>
     

    </div>
  </div>
</section>
<Testimonials/>
    </div>
  )
}
