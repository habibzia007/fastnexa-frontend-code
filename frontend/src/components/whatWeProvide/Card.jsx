import {FaPlus} from "react-icons/fa";
import {Link} from "react-router-dom";

const Card = ({title, link, description, image, icon, buttonTitle = null}) => {
    return (
        <div className="cursor-pointer relative w-full group">
            <div
                className="hover:shadow-[3px_-3px_0_rgba(255,101,0)] transition-all duration-300 relative z-10 w-full h-full bg-[#FFFFFF] rounded-[9.2px] p-3 lg:p-5 flex flex-col justify-between">
                <div className="pb-5">
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
                    <div className="space-y-2 lg:space-y-4 mt-5 lg:mt-5">
                        <h3 className="font-Poppins font-bold text-sm lg:text-[20.23px] text-left text-[#0E0E0E] leading-tight lg:leading-[27.59px]">
                            {title}
                        </h3>
                        <p className="font-Poppins font-normal text-xs lg:text-[12.88px] text-left text-[#444444] line-clamp-4 leading-[15.59px] lg:leading-[27.59px]">
                            {description}
                        </p>
                    </div>
                </div>
                <div className="lg:gap-3 ">
                    <Link to={`/services/${link}`} className="flex gap-x-2 items-center w-fit">
                        <div
                            className="w-[21px] h-[21px] lg:w-[36px] lg:h-[36px] rounded-full bg-[#EBEBEB] flex items-center justify-center group-hover:bg-[#FF6500]">
                            <FaPlus className="h-[7px] lg:h-[12px] text-[#FF6500] group-hover:text-white"/>
                        </div>
                        {/* <span className="font-Poppins font-normal text-[7.837px] lg:text-[12.88px] text-left text-[#232F3B] leading-[15.59px] lg:leading-[27.59px]">
              Read More
            </span> */}
                        <div
                            className="font-Poppins font-normal text-[12.88px] leading-[27.59px] text-left text-[#232F3B]"
                        >
                            {buttonTitle}
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
