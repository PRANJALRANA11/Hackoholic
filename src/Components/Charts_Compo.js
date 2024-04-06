import React, { useEffect, useState } from "react";
import axios from "axios";
import Active from "./Active";
import Emotion from "./Emotion";
import Engagement from "./Engagement";
import Excercises from "./Excercises";


export default function Charts_Compo() {
  // const[res,setres]=useState("")
  const [res_met, set_met_res] = useState({});
  const [date, set_date] = useState("");

  useEffect(() => {
    const getName = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `https://text-to-speech-uajn.onrender.com/v1/cup/users/${token}`
        );
        console.log(response.data); // Assuming the metrics are in the response data
      } catch (error) {
        console.error("Error fetching metrics:", error);
      }
    };
    getName();
    const getMetrics = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `https://text-to-speech-uajn.onrender.com/v1/cup/metrix/${token}`
        );
        // set_met_res(response)
        set_met_res(response.data);
        console.log(response.data); // Assuming the metrics are in the response data
      } catch (error) {
        console.error("Error fetching metrics:", error);
      }
    };
    getMetrics();
  }, []);

  useEffect(() => {
    if (
      res_met.list_of_duration_of_each_session &&
      res_met.list_of_duration_of_each_session.length > 0
    ) {
      const lastSession =
        res_met.list_of_duration_of_each_session[
          res_met.list_of_duration_of_each_session.length - 1
        ];
      const lastSessionStartTime = lastSession.start_time;
      const dateTimeString = lastSessionStartTime;
      const dateTime = new Date(dateTimeString);
      const dateOnly = dateTime.toISOString().split("T")[0];
      set_date(dateOnly);
    }
  }, [res_met]);

  return (
    <div className="bg-gray-950">
      <main className="z-0 flex flex-col mx-auto container">
        <section className="grid place-content-center lg:grid-cols-3 gap-4 py-20 px-4 ">
          <Card
            title="Start New Session"
            description="Start a new session to talk with us"
            data={{ value: new Date(date).toDateString(), title: "Last Date" }}
          />
          <Card
            title="View All Sessions"
            description="View all the sessions you have attended"
            data={{
              value: res_met.total_time_user_in_session || "0",
              title: "Seconds",
            }}
          />
          <Card
            title="View All Metrics"
            description="View all the metrics of your sessions"
            data={{
              value: res_met.total_session_attended || "0",
              title: "Talks",
            }}
          />
        </section>
        <section className="flex flex-col place-content-center justify-center gap-12 py-20 px-4">
          <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
              Metrics
            </span>{" "}
            Only For You.
          </h1>
          <Active />
          <section className="flex flex-col lg:grid lg:grid-cols-2 gap-12">
            <Emotion />
            <Engagement />
          </section>
        </section>
      </main>
    </div>
  );
}

function Card({ title, description, data }) {
  return (
    <section
      className="relative bg-gray-950 block p-6 border border-gray-200 rounded-md w-full mx-auto"
    >
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="my-4">
        <h2 className="text-white text-2xl font-bold pb-2">{title}</h2>
        <p className="text-gray-300 py-1">{description}</p>
      </div>

      <div className="flex justify-center items-center py-4">
        <div>
          <h1 className="text-4xl font-extrabold text-white">{data.value}</h1>
          <p className="text-gray-300">{data.title}</p>
        </div>
      </div>
    </section>
  );
}
