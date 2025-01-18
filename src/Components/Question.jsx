import React, { useState } from 'react';

const Question = ({ qst }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  return (
    <div className='w-full max-w-6xl mx-auto border border-white flex flex-col text-cyan-200 px-4 sm:px-6 md:px-8 py-3 sm:py-4 my-2 sm:my-4'>
      <div className='flex justify-between items-end gap-4'>
        <span className='text-lg sm:text-base'>{qst}</span>
        <img
          className='w-4 h-3 mb-1 sm:w-[18px] sm:h-[10px] cursor-pointer transition-transform duration-200 ease-in-out'
          src="./src/assets/Vector.png"
          alt="Toggle dropdown"
          onClick={toggleDropdown}
          style={{ transform: isDropdownVisible ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </div>

      {isDropdownVisible && (
        <div className='mt-2 space-y-2 text-sm sm:text-base'>
          <p>Step1: Get a desktop</p>
          <p>Step2: By the time you get one, Nu will be over, lol!</p>
        </div>
      )}
    </div>
  );
};

export default Question;