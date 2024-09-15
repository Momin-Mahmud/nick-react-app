import Basics from './Basics';
import { useState } from 'react';
import Icon from '../../../utils/Icon';
import Prospects from '../Prospects';
import AlmostDone from '../AlmostDone';
import OneLastThing from '../OneLastThing';
import Saving from '../Saving';

const Stepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      component: <Basics />
    },
    {
      component: <Prospects />
    }, {
      component: <AlmostDone/>
    }, {
      component : <OneLastThing/>
    },
    {
      component: <Saving/>
    }
  ];
  console.log(steps[activeStep]);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <div className='flex flex-col'>
      {steps[activeStep].component}
      <div className='w-full'>
        <progress className='progress-bar w-full' value={activeStep} max={steps.length - 1}></progress>
      </div>
      <div className='flex justify-between mt-4 cursor-pointer'>
        <div></div>
        {activeStep !== steps.length - 1 && (
        <span onClick={handleNext} className='text-[#710BA3] flex gap-2 items-center'>
          <span>Next</span>
          <Icon name='rightArrow' size='18' />
        </span>
        )}
      </div>
    </div>
  );
};

export default Stepper;
