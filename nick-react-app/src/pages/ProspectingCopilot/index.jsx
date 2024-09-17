import Icon from '../../utils/Icon';
import Button from '../../components/base/Button/Button';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import apiRequest from '../../utils/axios/api-request';
import Spinner from '../../components/base/Spinner';

const ProspectingCopilot = () => {
  const items = [
    {
      label: 'Can you help me write a prospecting email?'
    },
    {
      label: 'Write a sequence to one of my accounts'
    },
    {
      label: 'Craft a follow-up message for a prospect'
    },
    {
      label: 'Can you write me a custom LinkedIn message'
    }
  ];

  const questions = [
    'Which job title are you reaching out to?',
    'Which company are you reaching out to?',
    'Are there any specific triggers or perfect times to reach out to this prospect? (Provide examples such as a 10-K, blog post, LinkedIn profile, about page, job posting, etc.)'
  ];

  const [questionNumber, setQuestionNumber] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [inputArray, setInputArray] = useState([]);
  const [emailData, setEmailData] = useState([]);
  const [showEmail, setShowEmail] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(inputArray);
  }, [inputArray]);

  useEffect(() => {
    if (questionNumber == 3) {
      console.log('Question 3 done!');
      handleGptResponse();
    }
  }, [questionNumber]);

  const createObjectFromQuestions = (questions, inputArray) => {
    return questions.reduce((acc, question, index) => {
      acc[question] = inputArray[index] || '';
      return acc;
    }, {});
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      if (inputValue.trim() !== '') {
        setInputArray([...inputArray, inputValue]);
        setInputValue('');
        setQuestionNumber(questionNumber + 1);
      }
    }
  };

  const handleGptResponse = async () => {
    const questionsObject = createObjectFromQuestions(questions, inputArray);
    console.log('The object made is: ', questionsObject);
    setLoading(true);
    const { data, error } = await apiRequest('post', '/session/add_session', {
      data: {
        session: {
          session_id: uuidv4(),
          session_details: questionsObject
        }
      }
    });
    if (error == null) {
      console.log('Data: ', data?.data?.prompts[0]?.response?.emails);
      setEmailData(data?.data?.prompts[0]?.response?.emails);
      setShowEmail(true);
      setLoading(false);
    } else {
      console.error('Error: ', error);
    }
  };

  return (
    <>
      {loading ? (
        <div className='min-w-[85vw] h-full flex items-center justify-center'>
          <Spinner />
        </div>
      ) : (
        <div className='overflow-scroll max-h-[100vh]'>
          <div className='w-full'>
            <div className='flex items-center justify-end gap-2 p-5'>
              <div className='flex gap-1'>
                <Icon size='30' name='credits' />
                <span className='font-bold text-lg'>250/250</span>
              </div>
              <span className='text-xs text-[#999999]'>Credits reset in 30 days</span>
              <Button icon='currency' iconSize={16} size='small' innerText='Get More Credits' />
            </div>
          </div>
          <div className='flex-col flex w-[85vw] min-h-[100vh] py-16 gap-8 items-center overflow-scroll justify-end'>
            <div className='flex-col items-center flex justify-center'>
              <div className='flex flex-col items-center gap-1 mb-4'>
                <div>
                  <Icon name={'prospectingLogo'} size='70' className='mx-3' />
                </div>
                <div className='font-bold text-2xl'>Prospecting CoPilot</div>
                <div>Analyzes business scenarios and crafts tailored outreach messages</div>
              </div>
              {showEmail ? (
                <div
                  style={{
                    boxShadow: 'rgba(0, 0, 0, 0.15) 0px -50px 20px -40px inset'
                  }}
                  className='p-4 text-sm text-left mt-4 flex flex-col justify-start overflow-y-auto max-h-[30vh] mx-16 items-start gap-2 border-[1px] rounded-xl border-[#E9E9E9]'
                >
                  <div className='font-semibold text-[#4B5563]'>Emails</div>
                  <div className='flex flex-col gap-4 text-xs mt-2'>
                    {emailData.map((data, index) => (
                      <div className='flex flex-col gap-4' key={index}>
                        <div className='font-semibold flex items-center justify-start gap-2'>
                          <span>Subject:</span>
                          {data.subject}
                        </div>
                        <div>{data.body}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
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
              )}
            </div>
            <div className='w-[40vw] mt-6 mb-6'>
              <div className='flex items-start mb-6 font-bold'>
                {questionNumber <= 2 ? questions[questionNumber] : ''}
              </div>
              <div className='relative mt-2 rounded-md shadow-lg focus:ring-0 bg-white'>
                <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                  <span className='text-gray-500 sm:text-sm'>
                    <Icon name='attachments' size='16' />
                  </span>
                </div>
                <input
                  type='text'
                  name='chat'
                  id='chat'
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className='block w-full rounded-md border-[1px] border-[#E5E7EB] py-1.5 focus:outline-none bg-white pl-10 pr-20 placeholder:text-black sm:text-sm sm:leading-6'
                  placeholder='...'
                  onKeyDown={handleKeyDown}
                />
                <div className='absolute inset-y-0 right-0 flex pr-2 mt-1 items-center'>
                  <Icon name='upload' size='20' className='' />
                </div>
              </div>
              <div className='mt-4'>CoPilots can make mistakes. Check important information</div>
              {inputArray.length > 0 && (
                <div
                  style={{
                    boxShadow: 'rgba(0, 0, 0, 0.15) 0px -50px 20px -40px inset'
                  }}
                  className='p-4 text-sm text-left mt-4 flex flex-col justify-start overflow-y-auto max-h-[32vh] items-start gap-2 border-[1px] rounded-xl border-[#E9E9E9]'
                >
                  <div className='font-semibold text-[#4B5563]'>Submitted</div>
                  <div className='flex flex-col gap-4 text-xs mt-2'>
                    {inputArray.map((item, index) => (
                      <div key={item.id} className='flex items-center gap-2'>
                        <Icon name={'tickWhite'} size='12' className='p-0.5 rounded-full bg-[#6D28D9]' />
                        <div className='flex flex-col gap-1'>
                          <div className='font-bold'>{questions[index]}</div>
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
      )}
    </>
  );
};
export default ProspectingCopilot;
