import React from 'react';
import Badge from '../Badge/Badge';
import avatar from '../../../assets/Avatar/Avatar.png';
import Rating from '../Rating/Rating';
import Button from '../Button/Button';

const NewsCard = ({ title, description, imageSrc, imageOnLeft }) => {
  return (
    <div
      className={`flex items-center justify-center gap-24 ${
        imageOnLeft ? 'flex-row' : 'flex-row-reverse'
      }  overflow-hidden `}
    >
      <div className='p-4 flex flex-col items-start w-1/3 text-left'>
        <span className='mb-6'>
          <Badge
            text='Overline section title'
            type='primary'
            iconName='thunderBolt'
          />
        </span>
        <span className='font-bold text-4xl mb-2'>{title}</span>
        <p className='text-gray-600 my-2'>{description}</p>

        <div className='flex flex-row gap-3 items-center'>
          <div className='flex -space-x-2 overflow-hidden'>
            <img
              alt=''
              src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              className='inline-block h-10 w-10 rounded-full ring-2 ring-white'
            />
            <img
              alt=''
              src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              className='inline-block h-10 w-10 rounded-full ring-2 ring-white'
            />
            <img
              alt=''
              src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
              className='inline-block h-10 w-10 rounded-full ring-2 ring-white'
            />
            <img
              alt=''
              src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              className='inline-block h-10 w-10 rounded-full ring-2 ring-white'
            />
          </div>

          <div className='text-center mt-4'>
            <div>Trusted by 30+ members</div>
            <div>
              <Rating rating={5} />
            </div>
          </div>
        </div>

        <div>
          <Button type='outlined' innerText='Tertiary Action' />
        </div>
      </div>
      <img
        src={imageSrc}
        alt='Card'
        className={`w-1/3 object-cover h-96 border rounded-lg ${
          imageOnLeft ? 'mr-4' : 'ml-4'
        }`}
      />
    </div>
  );
};

export default NewsCard;
