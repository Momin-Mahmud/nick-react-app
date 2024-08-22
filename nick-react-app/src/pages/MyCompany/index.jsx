import Button from '../../components/base/Button/Button';
import { useState } from 'react';

const MyCompany = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <div className='w-[85vw] h-screen'>
      <div className='p-24 items-start flex flex-col w-[90%] '>
        <div className='flex items-center justify-between w-full'>
          <div className='text-xl font-bold'>My Company</div>
          <div>
            <Button innerText='Save' />
          </div>
        </div>
        <div className='p-8 bg-white w-full rounded-md mt-4 flex flex-col gap-3'>
          <div className='w-full max-w-sm min-w-[20vw] text-left mt-4'>
            <label className='block mb-1 text-sm text-slate-800 font-semibold'>
              Company Name
            </label>
            <input
              type='text'
              className='w-full h-10 bg-white placeholder:text-xs placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md'
              placeholder='Enter your text'
            />
          </div>
          <div className='w-full max-w-sm min-w-[20vw] text-left mt-4'>
            <label className='block mb-1 text-sm text-slate-800 font-semibold'>
              Company Name
            </label>
            <textarea
              type='text'
              rows={2}
              className='w-full h-[6rem] flex justify-start p-2 items-start focus:outline-none placeholder:align-text-top text-start bg-white text-sm border border-slate-200 rounded  transition duration-300 ease shadow-sm'
              placeholder='Enter your text'
            />
          </div>
          <div className='flex flex-col w-[36%] items-start justify-start'>
            <label className='block text-sm text-slate-800 font-semibold'>
              Select Category
            </label>
            <button
              onClick={() => setShowDropDown(!showDropDown)}
              id='dropdownDefaultButton'
              data-dropdown-toggle='dropdown'
              className='text-black bg-white mt-2 w-full border-[1px] focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-blue-800'
              type='button'
            >
              Dropdown button{' '}
              <svg
                className='w-2.5 h-2.5 ms-3'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 10 6'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='m1 1 4 4 4-4'
                />
              </svg>
            </button>
            {showDropDown && (
              <div
                id='dropdown'
                className='z-10 absolute mt-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-[20%]'
              >
                <ul
                  className='py-2 text-sm text-gray-700 dark:text-gray-200'
                  aria-labelledby='dropdownDefaultButton'
                >
                  <li>
                    <a href='#' className='block px-4 py-2 hover:bg-gray-100'>
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a href='#' className='block px-4 py-2 hover:bg-gray-100'>
                      Settings
                    </a>
                  </li>
                  <li>
                    <a href='#' className='block px-4 py-2 hover:bg-gray-100'>
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a href='#' className='block px-4 py-2 hover:bg-gray-100'>
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <label className='inline-flex items-start cursor-pointer mt-4'>
            <input type='checkbox' value='' className='sr-only peer' />
            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C026D3]"></div>
            <span className='ms-3 text-sm flex flex-col items-center justify-center font-medium text-gray-900 dark:text-gray-300'>
              <div className='font-bold text-black'>Leading Text</div>
              <div>Description</div>
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default MyCompany;
