import React, { useState } from 'react';
import Icon from '../../../utils/Icon';

const InputField = () => {
  const [inputValue, setInputValue] = useState('');

  // Function to remove 'http://' or 'https://'
  const formatLink = (link) => {
    // Remove 'http://' or 'https://'
    return link.replace(/^https?:\/\//, '');
  };

  const handleBlur = () => {
    // Format the input value when the input loses focus
    const formattedLink = formatLink(inputValue);
    setInputValue(formattedLink);
  };

  const handleChange = (e) => {
    // Update the input value as the user types
    setInputValue(e.target.value);
  };

  return (
    <div className="flex items-center w-[374px] h-[40px] bg-white border border-neutral-200 shadow-sm rounded-lg transition-shadow focus-within:outline-none focus-within:border-slate-400 hover:border-slate-400 hover:shadow-sm focus-within:shadow-md">
      {/* Left Content */}
      <div className="flex items-center px-3 h-full bg-neutral-50 border-r border-neutral-300 rounded-l-lg">
        <span className="text-sm font-medium text-neutral-600">https://</span>
      </div>

      {/* Input Field */}
      <input
        type="text"
        className="w-full h-full px-3 bg-white border-none outline-none text-neutral-900 text-sm"
        placeholder="Insert your link here"
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      {/* Right Content (Icon) */}
      <div className="flex items-center px-3">
        <Icon name="globe" size="16" />
      </div>
    </div>
  );
};

export default InputField;
