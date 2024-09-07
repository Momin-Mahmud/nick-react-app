import React from 'react';
import RadioButton from '../../../components/base/RadioButton/RadioButton';
import InputField from '../../../components/base/InputField/InputField';

const Form8 = () => {
  return (
    <div className='text-left mt-4 flex-grow flex-col flex justify-center'>
      <label className='block mb-2 text-sm text-slate-800 font-semibold'>
        Your Company's Website
      </label>
      <InputField />
      <span className='text-sm text-[#6B7280] mt-2'>Leave blank if you don’t have one</span>
    </div>
  );
};

export default Form8;
