import React from "react";
import Icon from "../../../utils/Icon";

const FAQCard = ({ icon, heading, body }) => {
  return (
    <div className="w-[24vw] h-[24vh] rounded-tl-[6px] shadow-lg bg-white flex flex-col items-center justify-center">
      <Icon name={icon} size={24} className="mb-5" />
      <div className="text-xl font-semibold mb-3">
        {heading}
      </div>
      <p className="text-gray-600 text-center px-2">
        {body}
      </p>
    </div>
  );
};

export default FAQCard;
