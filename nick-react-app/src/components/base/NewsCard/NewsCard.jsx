import React from "react";
import Badge from "../Badge/Badge";
import avatar from "../../../assets/Avatar/Avatar.png";
import Rating from "../Rating/Rating";
import Button from "../Button/Button";

const NewsCard = ({ title, description, imageSrc, imageOnLeft }) => {
  const numImages = 5; // Number of images
  const overlapAmount = 8;
  const imageSize = 48; // Size of each image in pixels

  return (
    <div
      className={`flex ${
        imageOnLeft ? "flex-row" : "flex-row-reverse"
      }  overflow-hidden `}
    >
      <div className="p-4 flex flex-col items-start w-1/2 text-left">
        <span className="mb-6">
          <Badge
            text="Overline section title"
            type="primary"
            iconName="thunderBolt"
          />
        </span>
        <span className="font-bold text-2xl mb-2">{title}</span>
        <p className="text-gray-600 my-2">{description}</p>

        <div className="flex flex-row items-center">
          <div className="relative flex items-center mr-5">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <img
                key={item}
                src={avatar}
                alt={`Avatar ${item}`}
                // className="w-12 h-12 absolute"
                // style={{
                //   left: `${index * 20}px`, // Adjust overlap distance
                //   zIndex: 5 - index, // Ensures that each subsequent image appears on top
                // }}
              />
            ))}
          </div>

          <div className="text-center mt-4">
            <div>Trusted by 30+ members</div>
            <div>
              <Rating rating={5} />
            </div>
          </div>
        </div>

        <div>
          <Button type="outlined" innerText="Tertiary Action" />
        </div>
      </div>
      <img
        src={imageSrc}
        alt="Card"
        className={`w-1/2 object-cover h-64 border rounded-lg ${imageOnLeft ? "mr-4" : "ml-4"}`}
      />
    </div>
  );
};

export default NewsCard;
