import React from 'react';
import Icon from '../../../utils/Icon';

const Rating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(rating)].map((_, index) => (
        <Icon key={index} name="star" size={24} />
        // index
      ))}
    </div>
  );
};

export default Rating;
