import React from "react";
import honor from "../assets/images/honor.png";
import lakecity from "../assets/images/lakecity.png";
import people from "../assets/images/people.png";
import xinhuamall from "../assets/images/xinhuamall.png";
import netutils from "../assets/images/netutils.png";
import group0 from "../assets/images/group0.png";

const OurClients = () => {
  return (
    <div class="w-[1134px] h-[329.17px] top-[2560px]  mx-auto  mt-[80px] flex flex-col items-center gap-5">
      <h2 className="text-[#FF6500] font-Poppins font-semibold text-[16px] leading-[28.19px] tracking-[0.9396284818649292px] text-center">
        Our Clients
      </h2>
      <h1 className="text-[#232F3B] font-Poppins font-semibold text-[42px] leading-[61.08px] text-center">
        We share our confidence and passion with.
      </h1>
      <div className="w-[1134px] h-[168px] top-[2691px] left-[189px]   flex items-center justify-between ">
        <img
          className="w-[167.54px] h-[167.54px]  filter grayscale"
          src={honor}
          alt=""
        />
        <img
          className="w-[167.54px] h-[167.54px] filter grayscale"
          src={lakecity}
          alt=""
        />
        <img
          className="w-[167.54px] h-[167.54px] filter grayscale"
          src={people}
          alt=""
        />
        <img
          className="w-[167.54px] h-[167.54px] filter grayscale"
          src={xinhuamall}
          alt=""
        />
        <img
          className="w-[167.54px] h-[167.54px] filter grayscale"
          src={netutils}
          alt=""
        />
      </div>
      <img className="text-[#FF6500] text-center" src={group0} alt="" />
    </div>
  );
};

export default OurClients;
