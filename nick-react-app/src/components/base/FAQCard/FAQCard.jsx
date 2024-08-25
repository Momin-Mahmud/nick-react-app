import React from "react";
import Icon from "../../../utils/Icon";

const FAQCard = ({ icon, heading, body }) => {
  return (
    <div className="w-[24vw] rounded-tl-[6px] shadow-lg bg-white flex flex-col items-center justify-center">
      <span className="py-4 ">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" rx="24" fill="#EEF2FF" />
          <rect
            opacity="0.2"
            x="16"
            y="14"
            width="16"
            height="16"
            rx="3"
            fill="#A21CAF"
          />
        </svg>
      </span>
      <div className="text-xl font-semibold mb-3">{heading}</div>
      <p className="text-gray-600 text-center px-2 pb-6">{body}</p>
    </div>
  );
};

export default FAQCard;
