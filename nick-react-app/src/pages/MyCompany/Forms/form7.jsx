import React from 'react';
import RadioButton from '../../../components/base/RadioButton/RadioButton';

const Form7 = () => {
  const jobTitles = ['CEO', 'Product Manager', 'CTO', 'HR Manager', 'COO', 'IT Manager', 'CFO', 'Operations Manager', 'CMO', 'Customer Success Manager', 'VP of Sales', 'Data Analyst', 'VP of Marketing', 'Software Engineer', 'Sales Manager', 'Account Executive', 'Marketing Manager']
  return (
    <div className='text-left mt-4 flex-grow flex-col flex justify-center'>
      <label className='block mb-2 text-sm text-slate-800 font-semibold'>
      Which job titles are you reaching out to?
      </label>
      <span className='mb-3 text-sm text-[#6B7280]'>Select all that apply</span>
      <div className='grid grid-cols-2 gap-2'>
        {jobTitles.map(jobTitle => (
          <RadioButton label={jobTitle}/>
        ))}
        <RadioButton label={'Other'} labelEditable={true}/>
      </div>
    </div>
  );
};

export default Form7;
