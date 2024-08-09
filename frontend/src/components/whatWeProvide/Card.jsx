import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ title, link, description, image, icon = null }) => {
  return (
    <div className="cursor-pointer relative sm:w-[160px] sm:h-[207.3px] lg:w-[281.44px] lg:h-[363.3px] group">
      <div className="hover:shadow-[3px_-3px_0_rgba(255,101,0)] transition-all duration-300 relative z-10 w-full h-full bg-[#FFFFFF] rounded-[9.2px] p-3 lg:p-5">
        {!icon ? (
            <img
                className="w-[26px] h-[26px] lg:w-[46px] lg:h-[46px]"
                src={image}
                alt={title}
            />
        ) : (
            <div className="w-[26px] h-[26px] lg:w-[46px] lg:h-[46px] text-[#FF6500]">
              {icon}
            </div>
        )}
        <div className="space-y-2 lg:space-y-4 mt-2 lg:mt-5">
          <h3 className="font-Poppins font-bold text-[10.58px] lg:text-[20.23px] text-left text-[#0E0E0E] h-[31px] lg:h-[55px] leading-tight lg:leading-[27.59px]">
            {title}
          </h3>
          <p className="font-Poppins font-normal text-[7.37px] lg:text-[12.88px] text-left text-[#444444] line-clamp-4 leading-[15.59px] lg:leading-[27.59px]">
            {description}
          </p>
          <div className="flex gap-1 lg:gap-3 items-center">
            <div className="w-[21px] h-[21px] lg:w-[36px] lg:h-[36px] rounded-full bg-[#EBEBEB] flex items-center justify-center group-hover:bg-[#FF6500]">
              <FaPlus className="h-[7px] lg:h-[12px] text-[#FF6500] group-hover:text-white" />
            </div>
            {/* <span className="font-Poppins font-normal text-[7.837px] lg:text-[12.88px] text-left text-[#232F3B] leading-[15.59px] lg:leading-[27.59px]">
              Read More
            </span> */}
            <Link
              to={`/services/${link}`}
              className="font-Poppins font-normal text-[12.88px] leading-[27.59px] text-left text-[#232F3B]"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
