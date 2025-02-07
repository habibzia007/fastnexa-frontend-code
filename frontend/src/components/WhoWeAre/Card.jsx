import symbol from "../../assets/images/symbol.svg";

// eslint-disable-next-line react/prop-types
const Card = ({ title, description, border, image }) => {

  const truncateDescription = (text, maxLength) => {
    if (text?.length > maxLength) {
      return text.substring(0, maxLength);
    }
    return text;
  };

  const truncatedDescription = truncateDescription(description, 100);

  return (
    <div
      className={`w-[151px] lg:w-[247px] md:w-[165px] py-3 px-1 border-[#ECECEC] ${
        border ? "border-r-[2px]" : ""
      }`}
    >
      <div className="flex gap-2 items-center">
        <img
          className="text-[15.41px] h-[21px] w-[21px] leading-[15.41px]  sm:text-[20.78px] sm:leading-[20.78px] object-cover"
          src={image ? image : symbol}
          alt=""
        />
        <h3 className="font-barlow font-bold text-[15.41px] leading-[25.68px] sm:text-[20.78px] sm:leading-[34.63px] text-left">
          {title}
        </h3>
      </div>
      <p className="font-Poppins flex md:flex-nowrap flex-wrap font-normal text-xs leading-[19px] sm:text-[16px] sm:leading-[26px] text-left text-[#4C4D56] mt-3">
        {truncatedDescription}
      </p>
    </div>
  );
};

export default Card;
