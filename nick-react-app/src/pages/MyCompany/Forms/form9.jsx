import React from 'react';
import RadioButton from '../../../components/base/RadioButton/RadioButton';
import InputField from '../../../components/base/InputField/InputField';
import FileUploader from '../../../components/base/FileUploader/FileUploader';

const Form9 = () => {
  return (
    <div className='text-left mt-4 flex-grow flex-col flex justify-center'>
      <div className='w-[452px]'>
        <FileUploader />
        <span className='text-sm text-[#6B7280] mt-2'>Upload your sales decks, white papers, case studies, or any relevant PDFs here. These materials help the AI learn from your proven successes, ensuring it generates precise and persuasive messaging tailored to your business.</span>
      </div>
    </div>
  );
};

export default Form9;
