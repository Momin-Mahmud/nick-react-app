import React from "react";

const TestimonialCard = ({ img, alt }) => {
  return (
    <div className="bg-white rounded-lg shadow-md w-60 h-20 flex items-center justify-center flex-shrink-0 transform transition-transform duration-300 hover:scale-110">
      {/* Centered Image */}
      <img src={img} alt={alt} className="max-w-full max-h-full object-cover rounded-md" />
    </div>
  );
};

export default TestimonialCard;
