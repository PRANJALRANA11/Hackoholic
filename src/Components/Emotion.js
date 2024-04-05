import React,{useEffect,useState} from 'react'
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';

export default function Emotion() {
  
  const[engage,set_engage]=useState([])

  useEffect(() => {
    const getMetrics = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`https://text-to-speech-uajn.onrender.com/v1/cup/metrix/${token}`);
        // set_met_res(response)
        set_engage(response.data.sentiment_compound)
        console.log(response.data.engagement_factor); // Assuming the metrics are in the response data
      } catch (error) {
        console.error('Error fetching metrics:', error);
      }
    }

    getMetrics();
  }, []);
    const options_area_1 = {
        chart: {
           type: 'area'
         },
         series: [
           {
             name: 'score',
             data: engage.map(factor => (factor.avg_sentiment_compound))
           }
         ],
         xaxis: {
           categories: engage.map((_, index) => index + 1)
         },
         stroke: {
           curve: 'smooth',
           colors: ['#1A56DB'], // Line color
           width: 4, // Line width
           dashArray: [0, 8], // Dash array for dashed lines
         },
         fill: {
           type: 'gradient',
           gradient: {
             shadeIntensity: 1,
             opacityFrom: 0.7,
             opacityTo: 0.3,
             stops: [0, 100]
           }
         }
     };
  return (
    <div>
       
        <div className='w-[75vw] mt-10 ml-40 p-10 mb-40 bg-[white] rounded-lg shadow'>
        <h1 class="text-5xl font-extrabold text-blue-600 ">Average Emotion Uplift</h1>
      <ReactApexChart options={options_area_1} series={options_area_1.series} type="area" height={350}/>
      </div>
    </div>
  )
}
