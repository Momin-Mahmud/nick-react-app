import React from 'react';

const Form3 = () => {
  return (
    <div className='w-full max-w-sm min-w-[20vw] text-left mt-4 flex-grow flex-col flex justify-center'>
      <label className='block mb-1 text-sm text-slate-800 font-semibold'>
      What problem does your product or service solve for customers?
      </label>
      <textarea
        rows={5}
        className='w-full bg-white placeholder:text-xs placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 mb-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md'
        placeholder={`Describe in detail the problem your company solves`}
      />
      <span className='text-sm text-[#6B7280]'>e.g., manual invoicing processes lead to frequent errors and time-consuming tasks for companies, or outdated software makes it difficult for small businesses to manage inventory efficiently</span>
    </div>
  );
};

export default Form3;
