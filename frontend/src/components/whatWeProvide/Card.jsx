import { FaPlus } from "react-icons/fa";

const Card = ({ title, description, image }) => {
  return (
    <div className="cursor-pointer relative w-[160px] h-[207.3px] sm:w-[281.44px] sm:h-[363.3px] group">
      <div className="hover:shadow-[3px_-3px_0_rgba(255,101,0)] sm:hover:shadow-[3px_-3px_0_rgba(255,101,0)]  transition-all duration-300 relative z-10 w-[160px] h-[207.3px] sm:w-[281.44px] sm:h-[363.3px] group bg-[#FFFFFF] rounded-[9.2px] p-3 sm:p-5 ">
        <img
          className="w-[26px] h-[26px] sm:w-[46px] sm:h-[46px]"
          src={image}
          alt=""
        />
        <div className="space-y-4 sm:mt-5 mt-2 w-[133px] h-[135px] sm:w-[243px] sm:h-[237.79px]">
          <h3 className="font-Poppins h-[31px] sm:0 font-bold text-[10.58px] sm:text-[20.23px] sm:leading-[27.59px] text-left text-[#0E0E0E] sm:h-[55px]">
            {title}
          </h3>
          <p className="font-Poppins line-clamp-4 font-normal text-[7.37px] leading-[15.59px] sm:text-[12.88px] sm:leading-[27.59px] text-left text-[#444444]">
            {description}
          </p>
          <div className="flex gap-1 sm:gap-3 items-center">
            <div className="w-[21px] h-[21px] sm:w-[36px] sm:h-[36px] rounded-full bg-[#EBEBEB] flex items-center justify-center group-hover:bg-[#FF6500]">
              <FaPlus className="h-[7px] sm:h-[12px] text-[#FF6500] group-hover:text-[#ffff]" />
            </div>
            <span className="font-Poppins font-normal text-[7.837px] leading-[15.59px] sm:text-[12.88px] sm:leading-[27.59px] text-left text-[#232F3B]">
              Read More
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
