import React from "react";
import Icon from "../../../utils/Icon";

const StatsCards = ({ number, symbol, percentage, tagline }) => {
  console.log(number, "hello");
  return (
    <div className="mx-auto bg-white shadow-lg rounded-lg px-20 py-6">
      <div className="flex items-center justify-between">
        <p className="text-4xl font-bold">{number + symbol}</p>
        <span className="flex items-between items-center mx-8 text-sm text-green-500 bg-[#F0FDF4] rounded-lg">
          <Icon name="arrow" size={16} />
          <p className="">
            {percentage}%
          </p>
        </span>
      </div>
      <p className="text-sm text-[#6B7280]-300">{tagline}</p>
    </div>
  );
};

export default StatsCards;
