import React from "react";
import {MdArrowRightAlt} from "react-icons/md";
import personIcon from "../../assets/images/personIcon.svg";
import msgIcon from "../../assets/images/msgIcon.svg";
import {Link} from "react-router-dom";

const CaseStudy = ({data}) => {
    return (
        <>
            <Link to={`/casestudies/${data.path}`}
                  className="w-full max-w-sm bg-white shadow-lg rounded-md relative h-auto group">
                <div className="overflow-hidden">
                    <img
                        className="p-4 w-full h-56 sm:h-40 md:h-48 lg:h-56 !object-none transition duration-500 ease-in-out group-hover:scale-105 rounded-none"
                        src={Object.values(data.image)[0]}
                        alt={data.title}/>
                </div>
                <div className="px-5 pb-5">
                    {/*<div className="flex items-center space-x-2">*/}
                    {/*    <img src={personIcon} alt="Author" className="w-5 h-5"/>*/}
                    {/*    <span className="text-sm font-medium text-gray-700">{data.author}</span>*/}
                    {/*</div>*/}
                    <h3 className="mt-3 text-xl font-semibold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">{data.title}</h3>

                    {/*<div*/}
                    {/*    className="absolute top-6 left-6 bg-gradient-to-b from-orange-300 to-orange-600 rounded-xl p-2 text-center shadow-lg transform transition-all duration-300 hover:scale-105">*/}
                    {/*    <div className="bg-white bg-opacity-20 rounded-md p-1">*/}
                    {/*        <span className="block text-sm sm:text-base md:text-lg lg:text-base font-semibold text-white">*/}
                    {/*          {data.date}*/}
                    {/*        </span>*/}
                    {/*        <span*/}
                    {/*            className="block text-xs sm:text-sm md:text-base lg:text-sm font-normal text-white opacity-90">*/}
                    {/*          {data.month}*/}
                    {/*        </span>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className="flex items-center justify-between">
                        <div className="flex items-center mt-5">
                            <span
                                className="font-Poppins text-sm font-semibold text-orange-500 group-hover:text-gray-800 transition-colors duration-300">
                                READ FULL
                            </span>
                            <MdArrowRightAlt
                                className="ml-2 text-[#FF6500] group-hover:text-gray-800 duration-500 group-hover:translate-x-1 transition-all"/>
                        </div>
                    </div>
                </div>
            </Link>


            {/*<div className="relative w-full group transition-all duration-300 ease-in-out ">*/}
            {/*    /!* Card image *!/*/}
            {/*    <img*/}
            {/*        className="w-full h-36 sm:h-40 md:h-48 lg:h-56 rounded-lg object-cover"*/}
            {/*        src={Object.values(data.image)[0]}*/}
            {/*        alt={data.title}*/}
            {/*    />*/}
            {/*    /!* Date badge *!/*/}
            {/*    <div*/}
            {/*        className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-gradient-to-b from-orange-300 to-orange-600 rounded-lg px-4 py-2 text-center text-white">*/}
            {/*    <span className="block text-xs sm:text-sm md:text-lg lg:text-xl font-semibold">*/}
            {/*        {data.date}*/}
            {/*    </span>*/}
            {/*        <span className="block text-[0.6em] sm:text-xs md:text-sm lg:text-base font-normal">*/}
            {/*        {data.month}*/}
            {/*    </span>*/}
            {/*    </div>*/}
            {/*    /!* Card content *!/*/}
            {/*    <Link to={`/blogs/${data.path}`}*/}
            {/*          className="shadow-md absolute bottom-[-100px] left-3 right-3 bg-white p-4 sm:p-6 md:p-4 lg:p-8 rounded-b-lg transition-shadow duration-300 ease-in-out hover:transition-all group-hover:shadow-[0px_3px_0px_rgba(255,101,0)]">*/}
            {/*        <div*/}
            {/*            className="flex items-center mb-2 space-x-4 text-xs sm:text-sm md:text-base lg:text-lg text-[#999999]">*/}
            {/*            <div className="flex items-center space-x-1">*/}
            {/*                <img src={personIcon} alt="Author" className="w-4 h-4"/>*/}
            {/*                <span*/}
            {/*                    className="text-[.5rem] md:text-[.5rem] lg:text-[.7rem] lg:leading-5 font-Poppins">{data.author}</span>*/}
            {/*            </div>*/}
            {/*            <div className="flex items-center space-x-1">*/}
            {/*                /!*<img src={msgIcon} alt="Comments" className="w-4 h-4" />*!/*/}
            {/*                <span className="text-[.5rem] md:text-[.5rem] lg:text-[.7rem] leading-5 font-Poppins">*/}
            {/*                /!*{data.comments} Comments*!/*/}
            {/*            </span>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <h3 className="font-Poppins text-base sm:text-lg md:text-[0.75rem] md:leading-5 lg:text-[1.25rem] lg:leading-6 font-semibold text-[#0E0E0E] group-hover:text-[#FF6500] transition-colors duration-300">*/}
            {/*            {data.title}*/}
            {/*        </h3>*/}
            {/*        <div className="flex items-center mt-4">*/}
            {/*        <span*/}
            {/*            className="font-Poppins text-xs sm:text-sm md:text-[0.625rem] lg:text-[.63rem] lg:leading-5 font-semibold text-[#FF6500] group-hover:text-gray-800 transition-colors duration-300">*/}
            {/*            READ FULL*/}
            {/*        </span>*/}
            {/*            <MdArrowRightAlt*/}
            {/*                className="ml-2 text-[#FF6500] group-hover:text-gray-800 transition-colors duration-300"/>*/}
            {/*        </div>*/}
            {/*    </Link>*/}
            {/*</div>*/}
        </>
    );
};

export default CaseStudy;
