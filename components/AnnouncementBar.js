import React from 'react';
import {CloseIcon} from "./Icons"
const AnnouncementBar = ({ message }) => {
  return (
    <div className="bg-primary-100 hover:cursor-pointer">
      <div className='container mx-auto justify-center flex items-center relative'>
        <div className='text-white text-17xl font-bold tracking-[3%] py-2'>{message}</div>
        <span className="inline-flex items-center absolute top-0 bottom-0 my-auto right-0 ">
          <CloseIcon />
        </span>
      </div>
    </div>
  );
};

export default AnnouncementBar;