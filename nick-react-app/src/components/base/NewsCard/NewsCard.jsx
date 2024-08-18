import React from "react";
import Badge from "../Badge/Badge";

const NewsCard = ({ title, description, imageSrc, imageOnLeft }) => {
  return (
    <div
      className={`flex ${
        imageOnLeft ? "flex-row" : "flex-row-reverse"
      } border rounded-lg shadow-lg overflow-hidden mb-4`}
    >
      <img
        src={imageSrc}
        alt="Card"
        className={`w-1/2 object-cover h-64 ${imageOnLeft ? 'mr-4' : 'ml-4'}`} // Adding margin for space
      />
      <div className="p-4 flex flex-col items-start justify-start w-1/2">
      <span className="mb-4">
        <Badge
          text="Overline section title"
          type="primary"
          iconName="thunderBolt"
        />
        </span>
        <span className="font-bold mt-2 text-2xl">{title}</span>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
