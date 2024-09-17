import Icon from "../../utils/Icon";
import React from "react";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import apiRequest from "../../utils/axios/api-request";

const ProspectingCopilot = () => {
  const items = [
    {
      label: "Can you help me write a prospecting email?",
    },
    {
      label: "Write a sequence to one of my accounts",
    },
    {
      label: "Craft a follow-up message for a prospect",
    },
    {
      label: "Can you write me a custom LinkedIn message",
    },
  ];

  const questions = [
    "Which job title are you reaching out to?",
    "Which company are you reaching out to?",
    "Are there any specific triggers or perfect times to reach out to this prospect? (Provide examples such as a 10-K, blog post, LinkedIn profile, about page, job posting, etc.)",
  ];

  const [questionNumber, setQuestionNumber] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [inputArray, setInputArray] = useState([]);

  useEffect(() => {
    console.log(inputArray);
  }, [inputArray]);

  useEffect(() => {
    if (questionNumber == 3) {
      console.log("Question 3 done!");
      handleGptResponse();
    }
  }, [questionNumber]);

  const createObjectFromQuestions = (questions, inputArray) => {
    return questions.reduce((acc, question, index) => {
      acc[question] = inputArray[index] || "";
      return acc;
    }, {});
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      if (inputValue.trim() !== "") {
        setInputArray([...inputArray, inputValue]); // Add the current input value to the array
        setInputValue(""); // Clear the input after saving
        setQuestionNumber(questionNumber + 1); // Increment the question number
      }
    }
  };

  const handleGptResponse = async () => {
    const questionsObject = createObjectFromQuestions(questions, inputArray);
    console.log("The object made is: ", questionsObject);

    const { data, error } = await apiRequest("post", "/session/add_session", {
      data: {
        session: {
          session_id: uuidv4(),
          session_details: questionsObject,
        },
      },
    });
    console.log("Data: ", data);
    console.log("Error: ", error);
  };

  return (
    <div className="flex-col flex w-[85vw] h-[95vh] gap-24 items-center justify-end">
      <div className="flex-col items-center flex justify-center">
        <div className="flex flex-col items-center gap-1">
          <div>
            <Icon name={"prospectingLogo"} size="70" className="mx-3" />
          </div>
          <div className="font-bold text-2xl">Prospecting CoPilot</div>
          <div>
            Analyzes business scenarios and crafts tailored outreach messages
          </div>
        </div>
        {/* <div>
          <div className='mt-4'>
            <div className='flex items-center justify-center gap-5'>
              {items.map((item, index) => (
                <div
                  key={index}
                  className='border-[1px] border-[#E9E9E9] rounded-md shadow-lg p-4 max-w-[12vw] text-start text-black h-[16vh] text-wrap flex items-center justify-center'
                >
                  <div className='flex items-center gap-2'>
                    <div>{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
      <div className="w-[40vw] mt-32 mb-6">
        <div className="flex items-start mb-6 font-bold">
          {questionNumber <= 2 ? questions[questionNumber] : ""}
        </div>
        <div className="relative mt-2 rounded-md shadow-lg focus:ring-0 bg-white">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">
              <Icon name="attachments" size="16" />
            </span>
          </div>
          <input
            type="text"
            name="chat"
            id="chat"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="block w-full rounded-md border-[1px] border-[#E5E7EB] py-1.5 focus:outline-none bg-white pl-10 pr-20 placeholder:text-black sm:text-sm sm:leading-6"
            placeholder="..."
            onKeyDown={handleKeyDown}
          />
          <div className="absolute inset-y-0 right-0 flex pr-2 mt-1 items-center">
            <Icon name="upload" size="20" className="" />
          </div>
        </div>
        <div className="mt-4">
          CoPilots can make mistakes. Check important information
        </div>
      </div>
    </div>
  );
};
export default ProspectingCopilot;
