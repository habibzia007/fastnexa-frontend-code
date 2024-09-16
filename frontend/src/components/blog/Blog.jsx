import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import personIcon from "../../assets/images/personIcon.svg";
import msgIcon from "../../assets/images/msgIcon.svg";
import { Link } from "react-router-dom";
import slugify from 'slugify';

const Blog = ({ data , baseURL }) => {
    const slug = slugify(data.blog_title, { lower: true }); // Generate slug from blog title

    const dateObj = new Date(data.created_at);
    const day = dateObj.toLocaleString('en-US', { day: '2-digit' });
    const month = dateObj.toLocaleString('en-US', { month: 'short' });


    return (
        <div className="relative w-full group transition-all duration-300 ease-in-out">
            {/* Card image */}
            <img
                className="w-full h-36 sm:h-40 md:h-48 lg:h-56 rounded-lg object-cover"
                src={`${baseURL}${data.image}`}
                alt={data.blog_title}
            />
            {/* Date badge */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-gradient-to-b from-orange-300 to-orange-600 rounded-lg px-4 py-2 text-center text-white">
                <span className="block text-xs sm:text-sm md:text-lg lg:text-xl font-semibold">
                    {day}
                </span>
                <span className="block text-[0.6em] sm:text-xs md:text-sm lg:text-base font-normal">
                    {month}
                </span>
            </div>
            {/* Dynamic Link with slug */}
            <Link to={`/blogs/${slug}/${data.id}`} className="shadow-md absolute xl:bottom-[-100px] bottom-[-100px] lg:bottom-[-150px] left-3 right-3 bg-white p-4 sm:p-6 md:p-4 lg:p-8 rounded-b-lg transition-shadow duration-300 ease-in-out hover:transition-all group-hover:shadow-[0px_3px_0px_rgba(255,101,0)]">
                <div className="flex items-center mb-2 space-x-4 text-xs sm:text-sm md:text-base lg:text-lg text-[#999999]">
                    <div className="flex items-center space-x-1">
                        <img src={personIcon} alt="Author" className="w-4 h-4" />
                        <span className="text-[.5rem] md:text-[.5rem] lg:text-[.7rem] lg:leading-5 font-Poppins">{data.blog_author_name}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <span className="text-[.5rem] md:text-[.5rem] lg:text-[.7rem] leading-5 font-Poppins">
                            {data.comments} Comments
                        </span>
                    </div>
                </div>
                <h3 className="font-Poppins text-base sm:text-lg md:text-[0.75rem] md:leading-5 lg:text-[1.25rem] lg:leading-6 font-semibold text-[#0E0E0E] group-hover:text-[#FF6500] transition-colors duration-300">
                    {data.blog_title}
                </h3>
                <div className="flex items-center mt-4">
                    <span className="font-Poppins text-xs sm:text-sm md:text-[0.625rem] lg:text-[.63rem] lg:leading-5 font-semibold text-[#FF6500] group-hover:text-gray-800 transition-colors duration-300">
                        READ FULL
                    </span>
                    <MdArrowRightAlt className="ml-2 text-[#FF6500] group-hover:text-gray-800 transition-colors duration-300" />
                </div>
            </Link>
        </div>
    );
};

export default Blog;
