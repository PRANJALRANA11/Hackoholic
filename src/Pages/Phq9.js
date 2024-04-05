import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Phq9() {
  const questions = [
    'Question 1: . Little interest or pleasure in doing things',
    'Question 2: Feeling down, depressed, or hopeless',
    'Question 3: Trouble falling or staying asleep, or sleeping too much',
    'Question 4: Feeling tired or having little energy',
    'Question 5: Poor appetite or overeating',
    'Question 6: Feeling bad about yourself - or that you are a failure or have let yourself or your family down',
    'Question 7: Trouble concentrating on things, such as reading the newspaper or watching television',
    'Question 8: Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual',
    'Question 9: Thoughts that you would be better off dead, or of hurting yourself in some way'
  ];



  const navigate = useNavigate();
  let sum = 0;
  let questions_count = 0;

  const handleAnswerChange = (questionIndex, optionIndex, value) => {
    if (value === "Not at all") {
      sum += 0;
    } else if (value === "Several Days") {
      sum += 1;
    } else if (value === "More than half the days") {
      sum += 2;
    } else if (value === "Nearly every day") {
      sum += 3;
    }
    questions_count +=questionIndex
    if(questions_count===36){
      // Call the api here
      console.log(sum);
    }
    console.log(questions_count);

    // console.log(sum);
  };





  return (
    <>     
<section className="">
  <div className="flex  flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 mt-[25rem]">
    <h1 className="pl-5 text-4xl mt-10 font-semibold font-poppins mb-10">Healix</h1>
    <div className=" bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md">
      <div className="p-6  space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
          Phq9 Test
        </h1>
        <p className="text-sm font-light text-gray-900">
          These questions help us track your progress.
        </p>
        <p className="text-sm font-light text-gray-900">
                Over the last 2 weeks, how often have you been
                bothered by any of the following problems?
        </p>
<form className="space-y-4 md:space-y-6" action="#">
  {questions.map((question, questionIndex) => (
    <div key={questionIndex} className="mb-4">
      <label
        htmlFor={`answer-${questionIndex + 1}`}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {question}
      </label>
      <div className="flex items-center space-x-4">
        {["Not at all", "Several Days", "More than half the days", "Nearly every day"].map((option, optionIndex) => (
          <React.Fragment key={optionIndex}>
            <input
              type="radio"
              id={`answer-${questionIndex + 1}-${optionIndex}`}
              name={`${question}`}
              value={optionIndex}
              // checked={answers[questionIndex * 4 + optionIndex - 1] === optionIndex}
              onChange={() => handleAnswerChange(questionIndex, optionIndex, option)}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5"
              required
            />
            <label
              htmlFor={`answer-${questionIndex + 1}-${optionIndex}`}
              className="text-sm font-medium text-gray-900"
            >
              {option}
            </label>
          </React.Fragment>
        ))}
      </div>
    </div>
  ))}
  <button
    type="button"
    onClick={() => navigate("/Dashboard")}
    className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
  >
    Submit
  </button>
</form>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
