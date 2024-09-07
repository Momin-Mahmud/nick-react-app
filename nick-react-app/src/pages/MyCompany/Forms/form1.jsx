import React from 'react';

const Form1 = () => {
  return (
    <div className='w-full max-w-sm min-w-[20vw] text-left mt-4 flex-grow flex-col flex justify-center'>
      <label className='block mb-1 text-sm text-slate-800 font-semibold'>
        Company Name
      </label>
      <input
        type='text'
        className='w-full h-10 bg-white placeholder:text-xs placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 mb-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md'
        placeholder={`Write your company's name here`}
      />
      <span className='text-sm text-[#6B7280]'>e.g., Acme Corp.</span>
    </div>
  );
};

export default Form1;
