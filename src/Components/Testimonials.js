import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import About from './About';

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <div>
      <section className="bg-[#4f4faf] pb-20">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <Slider {...settings}>
            <div className="max-w-screen-md mx-auto">
              <svg
                className="h-12 mx-auto mb-3 text-gray-200 "
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="text-2xl font-medium text-gray-200">
                  "Healix is just awesome. Bot is very helpful and the mentalysis is very accurate. I would recommend it to"
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-black dark:text-white">Ram Chopra</div>
                  <div className="pl-3 text-sm font-light text-white dark:text-gray-400">Beta Tester</div>
                </div>
              </figcaption>
            </div>
            <div className="max-w-screen-md mx-auto">
              <svg
                className="h-12 mx-auto mb-3 text-gray-200 "
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="text-2xl font-medium text-gray-200">
                  "Platform is fully anonynymous no one can know who you are. I feel safe here. Great job!"
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-black dark:text-white">Vineeta Singh</div>
                  <div className="pl-3 text-sm font-light text-white dark:text-gray-400">Beta Tester</div>
                </div>
              </figcaption>
            </div>
            <div className="max-w-screen-md mx-auto">
              <svg
                className="h-12 mx-auto mb-3 text-gray-200 "
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="text-2xl font-medium text-gray-200">
                  "Pricing is very affordable. I can get mentalysis at very low cost. I am very happy with the service."
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-black dark:text-white">Arun Raj</div>
                  <div className="pl-3 text-sm font-light text-white dark:text-gray-400">Beta Tester</div>
                </div>
              </figcaption>
            </div>
            <div className="max-w-screen-md mx-auto">
              <svg
                className="h-12 mx-auto mb-3 text-gray-200 "
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="text-2xl font-medium text-gray-200">
                  "I like the way engagement factor is implemented in the bot. It feels like talking to a real person. Great job!"
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-black dark:text-white">Shrishti</div>
                  <div className="pl-3 text-sm font-light text-white dark:text-gray-400">Beta Tester</div>
                </div>
              </figcaption>
            </div>
            {/* Add more testimonial slides as needed */}
          </Slider>
        </div>
      </section>
      <About />
    </div>
  );
}
