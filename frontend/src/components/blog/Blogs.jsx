
import React from "react";
import Blog from "./Blog";
import { BlogCardData } from "../../utils/fakedb/data.jsx";

const Blogs = () => {
  return (
    <div className="relative w-full pb-40 mx-auto py-12">
      <div className="max-w-[1184.44px] mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="font-Poppins font-semibold text-[12px] lg:text-[16px] text-[#FF6500] leading-[28.19px] tracking-wider text-center">
          Latest Blogs
        </h3>
        <h3 className="font-Poppins font-semibold text-[22px] leading-[33.08px] lg:text-[42px] lg:leading-[61.08px] pt-2 text-[#232F3B] text-center">
          From the News Room
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-6 gap-y-[8.5rem]">
          {BlogCardData.map((data, index) => (
            <Blog key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;








