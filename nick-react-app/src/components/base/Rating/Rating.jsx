import React from 'react';
import Icon from '../../../utils/Icon';

const Rating = ({ rating }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(rating)].map((_, index) => (
        <Icon key={index} name="rating" size={16} />
      ))}
    </div>
  );
};

export default Rating;
