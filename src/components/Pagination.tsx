"use client";
import Image from "next/image";
import LeftArrowIcon from "../assets/LeftArrowIcon.svg";
import RightArrowIcon from "../assets/RightArrowIcon.svg";
function Pagination() {
  return (
    <div className="w-full flex items-center justify-center border-t border-gray-200">
      <div className="flex items-center  mr-4 text-gray-600 hover:text-indigo-700 cursor-pointer">
        <Image src={LeftArrowIcon} alt="LeftArrowIcon" />
        <p className="text-sm ml-3 font-medium leading-none ">Previous</p>
      </div>
      <div className="flex">
        <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 mr-4 px-2">
          1
        </p>
        <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 mr-4 px-2">
          2
        </p>
        <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 mr-4 px-2">
          3
        </p>
        <p className="text-sm font-medium leading-none cursor-pointer text-indigo-700 border-t border-indigo-400 mr-4 px-2">
          4
        </p>
        <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 mr-4 px-2">
          5
        </p>
      </div>
      <div className="flex items-center mr-4 text-gray-600 hover:text-indigo-700 cursor-pointer">
        <p className="text-sm font-medium leading-none mr-3">Next</p>
        <Image src={RightArrowIcon} alt="RightArrowIcon" />
      </div>
    </div>
  );
}

export default Pagination;
