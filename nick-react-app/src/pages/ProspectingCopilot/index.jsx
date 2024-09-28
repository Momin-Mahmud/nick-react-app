import Icon from "../../utils/Icon";
import Button from "../../components/base/Button/Button";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import apiRequest from "../../utils/axios/api-request";
import Spinner from "../../components/base/Spinner";
import { useRecoilState } from "recoil";
import { sessionDetail } from "../../atom";
import { toast } from "react-toastify";

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
    "Additional Prompts",
    "Additional Prompts",
  ];

  const [questionNumber, setQuestionNumber] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [inputArray, setInputArray] = useState([]);
  const [emailData, setEmailData] = useState([]);
  const [showEmail, setShowEmail] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedSessionDetail, setSelectedSessionDetail] =
    useRecoilState(sessionDetail);
  const [modifyText, setModifyText] = useState("");
  const [isRecoilPresent, setIsRecoilPresent] = useState(false);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");

  const displayError = (error) => {
    setError(error);
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1000);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    console.log("Recoil state: ", selectedSessionDetail);
    if (selectedSessionDetail != null) {
      if (Object.keys(selectedSessionDetail).length > 0) {
        setIsRecoilPresent(true);
        setLoading(true);
        const updatedArray = Object.values(
          selectedSessionDetail?.session_details
        );
        setInputArray(updatedArray);
        setEmailData(selectedSessionDetail?.prompts[0]?.response?.emails);
        setShowEmail(true);
        setLoading(false);
      }
    } else {
      console.log("The object is empty");
      setIsRecoilPresent(false);
      setInputArray([]);
    }
  }, [selectedSessionDetail]);

  useEffect(() => {
    if (questionNumber >= 3) {
      console.log("Question 3 done!");
      handleGptResponse("");
    }
  }, [questionNumber]);

  const createObjectFromQuestions = (questions, inputArray) => {
    return questions.reduce((acc, question, index) => {
      acc[question] = inputArray[index] || "";
      return acc;
    }, {});
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      if (inputValue.trim() !== "") {
        setInputArray([...inputArray, inputValue]);
        setInputValue("");
        setQuestionNumber(questionNumber + 1);
        if (inputArray.length >= 3) {
          setModifyText(inputValue);
          await handleGptResponse(inputValue);
        }
      }
    }
  };

  const handleGptResponse = async (modifyText) => {
    const questionsObject = createObjectFromQuestions(questions, inputArray);
    console.log("The object made is: ", questionsObject);
    setLoading(true);

    if (
      selectedSessionDetail != null &&
      Object.keys(selectedSessionDetail).length > 0
    ) {
      const { data, error } = await apiRequest("post", "/session/modify", {
        data: {
          session_id: selectedSessionDetail?.session_id,
          modify_text: modifyText,
        },
      });
      if (error == null) {
        console.log("Data: ", data?.prompts);

        const emails = [];

        if (data?.prompts && Array.isArray(data.prompts)) {
          data.prompts.forEach((prompt) => {
            if (prompt?.response?.emails) {
              emails.push(...prompt.response.emails);
            }
          });
        }

        setEmailData(emails);
        setShowEmail(true);
        setLoading(false);
      } else {
        setLoading(false);
        if (error) {
          console.log("ERROR", error);
          displayError(error);
        } else {
          console.error("Error: ", error);
        }
      }
    } else {
      const { data, error } = await apiRequest("post", "/session/add_session", {
        data: {
          session: {
            session_id: uuidv4(),
            session_details: questionsObject,
          },
        },
      });
      if (error == null) {
        console.log("Data: ", data?.data?.prompts[0]?.response?.emails);
        setEmailData(data?.data?.prompts[0]?.response?.emails);
        setShowEmail(true);
        setLoading(false);
      } else {
        console.error("Error: ", error);
      }
    }
  };

  return (
    <div className="relative bg-white">
      {loading && <Spinner width="85vw" />}
      <div className="w-full">
        <div className="flex items-center justify-end gap-2 p-5">
          <div className="flex gap-1">
            <Icon size="30" name="credits" />
            <span className="font-bold text-lg">250/250</span>
          </div>
          <span className="text-xs text-[#999999]">
            Credits reset in 30 days
          </span>
          <Button
            icon="currency"
            iconSize={16}
            size="small"
            innerText="Get More Credits"
          />
        </div>
      </div>
      <div className="flex-col flex w-[85vw] min-h-[100vh] pt-14 gap-8 items-center overflow-scroll justify-end">
        <div className="flex-col items-center flex justify-center">
          <div className="flex flex-col items-center gap-1 mb-4">
            <div>
              <Icon name={"prospectingLogo"} size="70" className="mx-3" />
            </div>
            <div className="font-bold text-2xl">Prospecting CoPilot</div>
            <div>
              Analyzes business scenarios and crafts tailored outreach messages
            </div>
          </div>
          {showEmail ? (
            <div
              style={{
                boxShadow: "rgba(0, 0, 0, 0.15) 0px -50px 20px -40px inset",
              }}
              className="p-4 text-sm text-left mt-4 flex flex-col justify-start overflow-y-auto max-h-[30vh] mx-16 items-start gap-2 border-[1px] rounded-xl border-[#E9E9E9]"
            >
              <div className="font-semibold text-[#4B5563]">Emails</div>
              <div className="flex flex-col gap-4 text-xs mt-2">
                {emailData.map((data, index) => (
                  <div className="flex flex-col gap-4" key={index}>
                    <div className="font-semibold flex items-center justify-start gap-2">
                      <span>Subject:</span>
                      {data.subject}
                    </div>
                    <div>{data.body}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-4">
              <div className="flex items-center justify-center gap-5">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="border-[1px] border-[#E9E9E9] rounded-md shadow-lg p-4 max-w-[12vw] text-start text-black h-[16vh] text-wrap flex items-center justify-center"
                  >
                    <div className="flex items-center gap-2">
                      <div>{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="w-[40vw] mt-6 mb-6">
          <div className="flex items-start mb-6 font-bold">
            {!isRecoilPresent
              ? questionNumber <= 2
                ? questions[questionNumber]
                : ""
              : "Additional prompts"}
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
          <div
            className={`flex items-center mt-4 justify-center rounded-md bg-[#dd9d9d] ${
              visible
                ? "animate-shake"
                : "opacity-0 transition-opacity duration-1000"
            }`}
          >
            <p
              className="text-white 
      px-2 py-1 font-medium text-sm"
            >
              {error}
            </p>
          </div>
          {inputArray.length > 0 && (
            <div
              style={{
                boxShadow: "rgba(0, 0, 0, 0.15) 0px -50px 20px -40px inset",
              }}
              className="p-4 text-sm text-left mt-4 flex flex-col justify-start overflow-y-auto max-h-[32vh] items-start gap-2 border-[1px] rounded-xl border-[#E9E9E9]"
            >
              <div className="font-semibold text-[#4B5563]">Submitted</div>
              <div className="flex flex-col gap-4 text-xs mt-2">
                {inputArray.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Icon
                      name={"tickWhite"}
                      size="12"
                      className="p-0.5 rounded-full bg-[#6D28D9]"
                    />
                    <div className="flex flex-col gap-1">
                      <div className="font-bold">{questions[index]}</div>
                      <div>{item}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProspectingCopilot;
