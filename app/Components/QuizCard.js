import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from 'next/image';
import { faCode, faEllipsis, faPlay } from '@fortawesome/free-solid-svg-icons';

function QuizCard(props) {
    return(
    <div className="rounded-[10px] flex flex-col gap-2 border border-gray-300 bg-white p-4">
      {/* Image Container */}
      <div className="relative bg-blue-700 w-full h-32 flex justify-center items-center  rounded-md ">
            {/* More Options Icon */}
                <div className="absolute cursor-pointer top-3 right-3">
                <FontAwesomeIcon
                    className="text-white"
                    height={13}
                    width={13}
                    icon={faEllipsis}
                />
                </div>    
                {/* Quiz Icon */}
                <FontAwesomeIcon
                    className="text-white"
                    width={80}
                    height={80}
                    icon={faCode}
                />
            </div>
            { /* Title Area */}
            <h3 className="font-bold">JavaScript Quiz</h3>
            {/* Questions */}      
            <p className="text-sm font-light">20 Questions</p>
            {/* Footer Area */}
            <div className="flex gap-3">
                {/* success rate area */}
                <div className="flex gap-1 items-center">
                    <img src="/target-777.png" width={20} height={10} alt="" />
                    <span className="text-[12px]">Success rate: 100%</span>
                </div>
                <div className="rounded-full w-7 h-7 bg-blue-700 flex items-center justify-center cursor-pointer">
                    <FontAwesomeIcon
                        className="text-white"
                        width={15}
                        height={15}
                        icon={faPlay}
                    />
                </div>
            </div>                  
        </div>
    );
}

export default QuizCard;