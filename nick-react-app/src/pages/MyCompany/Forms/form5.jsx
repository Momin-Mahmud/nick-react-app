import React from 'react';

const Form5 = () => {
  return (
    <div className='w-full max-w-sm min-w-[20vw] text-left mt-4 flex-grow flex-col flex justify-center'>
      <label className='block mb-1 text-sm text-slate-800 font-semibold'>
      What results or proof points do you have for customers?
      </label>
      <textarea
        rows={5}
        className='w-full bg-white placeholder:text-xs placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 mb-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md'
        placeholder={`Be as specific and detailed as possible, this will help the co-pilots craft the most accurate results...  `}
      />
      <span className='text-sm text-[#6B7280]'>e.g., we've helped Denny's increase their average check size by 40% and boost their revenue by 50% on the phone order line of business in just 60 days through our centralized restaurant call center</span>
    </div>
  );
};

export default Form5;
