import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialbg from "../../assets/rectangle-orange.svg";
import men from "../../assets/images/clients/E.png";
import men1 from "../../assets/images/clients/fastcables.png";
import msg from "../../assets/images/clients/caroyal_logo_new.png";
import Dots from "../../utils/Dots";

const Testimonial = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${testimonialbg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  // Sample testimonial cards array
  const testimonialCards = [
    {
      image: men,
      quote:
        "Fast Nexa has been incredible for our website project. The team is quick to respond and consistently delivers top-notch work. Their ability to handle any issues is a huge plus, and we’re looking forward to working with them long-term.",
      name: "Imperial Electric",
      position: " ",
    },
    {
      image: men1,
      quote:
        "Partnering with Fast Nexa for our app development and ERP needs has been a fantastic experience. They quickly understood our requirements and delivered a custom app that exceeded our expectations.",
      name: "Fast Cable",
      position: " ",
    },
    {
      image: msg,
      quote:
        "Dealing with complex projects is no easy feat, but Fast Nexa made it look simple. They delivered a ready CRM and an e-commerce site on time. Their ability to manage challenging tasks efficiently makes them a standout choice.",
      name: "Caroyal",
      position: " ",
    },
    // Add more testimonial objects as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div
      className="relative h-[388.2px]   xl:h-[588.2px] w-full  mt-5 xl:mt-[4.5rem"
      style={backgroundImageStyle}
    >
      <div className="w-[350px]  mx-auto  md:w-[750px] h-full xl:w-[1180px] pt-[40px] xl:pt-[80px]  ">
        <h2 className="text-[#FFFFFF] font-Poppins font-semibold text-[16px] leading-[28.19px] tracking-[0.9396284818649292px] text-center">
          Testimonial
        </h2>

        <h1 className="text-[#FFFFFF] font-Poppins font-semibold text-[22px] leading-[33.08px] xl:text-[42px] xl:leading-[61.08px] text-center">
          Our Clients Worldwide.
        </h1>

        <Slider
          {...settings}
          className=" min-w-[280px]   xl:w-[1189.44px] mx-auto slider-container"
        >
          {testimonialCards.map((card, index) => (
            <div key={index} className="pt-[40px] xl:pt-[60px] pl-1 xl:pl-6 ">
              <div className="w-[300.86px] mx-auto md:h-[160.01px] h-[180px] xl:w-[448.82px] xl:h-[217.72px] bg-white rounded-md shadow-md relative">
                <img
                  className="rounded-md w-[78px] h-[77px] xl:w-[106px] xl:h-[106px] absolute left-[-19px] top-[28px] xl:top-[2.5rem] xl:-left-[2.25rem]"
                  src={card.image}
                  alt=""
                />
                <div className="ml-[80px] xl:ml-[100px] md:pt-[28.5px] pt-[14px] xl:pt-[31.5px] space-y-2 xl:space-y-4">
                  {/*<img*/}
                  {/*  className="w-[27.01px] h-[23.28px] xl:w-[37.01px] xl:h-[32.28px]"*/}
                  {/*  src={msg}*/}
                  {/*  alt=""*/}
                  {/*/>*/}
                  <p className="w-[200.06px]  xl:w-[322.06px] xl:h-[128.59px] text-[#4C4D56] font-jost font-normal text-[12px] leading-[18.50px] xl:text-[15.75px] xl:leading-[25.2px] text-left">
                    {card.quote}
                  </p>
                  <p className="font-jost font-normal text-[9px] leading-[12px] xl:text-[12.6px] xl:leading-[15.75px] text-left text-black "> -
                    {card.name}
                    <span className="font-jost font-normal text-[6.94px] leading-[11.57px] xl:text-[9.45px] xl:leading-[15.75px] text-left text-[#47484A]">
                       {card.position}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
