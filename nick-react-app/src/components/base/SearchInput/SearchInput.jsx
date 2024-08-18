import React from 'react';
import Icon from '../../../utils/Icon';

const SearchInput = () => {
  return (
    <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-sm">
      <div className="pl-3">

        <Icon name = "searchIcon" size={16}/>
      </div>
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 pl-3 pr-3 text-gray-700 bg-transparent border-none rounded-full focus:outline-none"
      />
    </div>
  );
};

export default SearchInput;