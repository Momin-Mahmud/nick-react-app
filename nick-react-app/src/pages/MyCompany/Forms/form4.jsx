import React from 'react';

const Form4 = () => {
  return (
    <div className='w-full max-w-sm min-w-[20vw] text-left mt-4 flex-grow flex-col flex justify-center'>
      <label className='block mb-1 text-sm text-slate-800 font-semibold'>
      How do you uniquely solve this problem? How do you solve it differently or better than your competition?
      </label>
      <textarea
        rows={5}
        className='w-full bg-white placeholder:text-xs placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 mb-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md'
        placeholder={`Be as specific and detailed as possible, this will help the co-pilots craft the most accurate results...`}
      />
      <span className='text-sm text-[#6B7280]'>e.g., In-N-Out Burger focuses on a simplified menu with high-quality, fresh ingredients, which allows us to deliver consistently great taste and fast service. Unlike competitors who offer a wide variety of menu items, our focus on simplicity and quality sets us apart.</span>
    </div>
  );
};

export default Form4;
