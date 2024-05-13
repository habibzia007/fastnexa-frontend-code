import React from "react";

const Dots = () => {
  return (
    <div className="  flex items-center justify-center mt-8 sm:mt-10 gap-2 sm:gap-5">
      <div className="w-[12.15px]   h-[12.15px] sm:w-[16.54px]   sm:h-[16.54px] ring-1 ring-white rounded-full flex items-center justify-center">
        <div className="w-[4.05px]   h-[4.05px] sm:w-[5.51px]   sm:h-[5.51px] bg-white rounded-full "></div>
      </div>
      <div className="w-[4.05px]   h-[4.05px] sm:w-[5.51px]   sm:h-[5.51px] bg-white rounded-full "></div>
      <div className="w-[4.05px]   h-[4.05px] sm:w-[5.51px]   sm:h-[5.51px] bg-white rounded-full "></div>
    </div>
  );
};

export default Dots;
