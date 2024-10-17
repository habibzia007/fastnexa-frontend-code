import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import slugify from "slugify";  // Import slugify

const CaseStudy = ({ data, baseURL }) => {
    const title = data.casestudies_title || 'untitled-case-study';
    const slug = slugify(title, { lower: true });

    const imageUrl = data.image ? `${baseURL}${data.image}` : `${baseURL}/default-image.jpg`;

    return (
        <Link to={`/casestudies/${slug}/${data.id}`}
              className="w-full max-w-sm bg-white shadow-lg rounded-md relative h-auto group">
            <div className="overflow-hidden">
                <img
                    className="p-4 w-full h-56 sm:h-40 md:h-48 lg:h-56 object-cover transition duration-500 ease-in-out group-hover:scale-105 rounded-none"
                    src={imageUrl}
                    alt={title} />
            </div>
            <div className="px-5 pb-5 flex flex-col justify-between h-[160px]">
                <h3 className="mt-3 text-xl font-semibold text-gray-900 group-hover:text-orange-500 transition-colors duration-300 line-clamp-3">
                    {title}
                </h3>

                <div className="flex items-center justify-between">
                    <div className="flex items-center mt-5">
                        <span
                            className="font-Poppins text-sm font-semibold text-orange-500 group-hover:text-gray-800 transition-colors duration-300">
                            READ FULL
                        </span>
                        <MdArrowRightAlt
                            className="ml-2 text-[#FF6500] group-hover:text-gray-800 duration-500 group-hover:translate-x-1 transition-all" />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CaseStudy;
