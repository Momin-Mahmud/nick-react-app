import Icon from "../../../utils/Icon";
import { useRef } from "react";

const Basics = ({ formData, setFormData }) => {
  const selectRef = useRef(null);  // Create a ref for the select element
  const companySizeDropDown = useRef(null);  // Create a ref for the select element
  const roles = [
    "Select Role",
    "COO",
    "CFO",
    "CTO",
    "Director",
    "Manager",
    "Partner",
    "Sales",
    "Other",
  ];
  const companySize = ["Select Size" ,"0-9", "10-49", "50-249", "250-999", "1000+"];

  return (
    <div className='w-full bg-white p-16 justify-start items-start rounded-lg flex flex-col gap-6'>
      <div className='text-3xl font-bold text-left'>Lets start with the Basics</div>
      <div className='flex flex-col items-start justify-start'>
        <label className='block mb-1 text-sm text-slate-800 font-semibold'>Your Name</label>
        <input
          type='text'
          className='w-full h-10 bg-white placeholder:text-xs placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 mb-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md'
          placeholder={`Full Name Here`}
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className='flex flex-col items-start justify-start'>
        <label className='block mb-1 text-sm text-slate-800 font-semibold'>Company Name</label>
        <input
          type='text'
          className='w-full h-10 bg-white placeholder:text-xs placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 mb-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md'
          placeholder={`Write your company's name here`}
          value={formData.companyName}
          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
        />
        <div>
          <span className='text-sm text-[#6B7280]'>e.g., Acme Corp.</span>
        </div>
      </div>
      <div className='flex flex-col items-start w-full justify-start'>
      <label className='block mb-1 text-sm text-slate-800 font-semibold'>
        Your Role
      </label>
      <div className='w-[70%] relative'>
        <Icon
          className='absolute right-4 top-3 cursor-pointer pointer-events-none' 
          name='dropDown'
          size='16'
        />
        <select
          ref={selectRef}  
          className='h-10 w-full bg-white text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 mb-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none'  // Added appearance-none to hide default chevron
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role : e.target.value })}
        >
        {roles.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
        </select>
      </div>
    </div>
    <div className='flex flex-col items-start w-full justify-start'>
      <label className='block mb-1 text-sm text-slate-800 font-semibold'>
        Company Size
      </label>
      <div className='w-[70%] relative'>
        <Icon
          className='absolute right-4 top-3 cursor-pointer pointer-events-none' 
          name='dropDown'
          size='16'
        />
        <select
          ref={companySizeDropDown}  
          className='h-10 w-full bg-white text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 mb-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none'  // Added appearance-none to hide default chevron
          value={formData.companySize}
          onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
        >
            {companySize.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
        </select>
      </div>
    </div>

    </div>
  );
};

export default Basics;


