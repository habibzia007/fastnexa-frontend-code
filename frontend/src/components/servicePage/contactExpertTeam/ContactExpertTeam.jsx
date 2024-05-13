import React from 'react';
import bg from '../../../assets/images/rectangle-orange.png';
import contactImage from '../../../assets/images/contact.png';

const ContactExpertTeam = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${bg})`,
    // backgroundSize: "contain",
    backgroundPosition: "center",
  };

  return (
    <div className=' flex justify-center w-full mb-[150px]'> {/* Orange Container */}
      <div
        className="relative h-[285px] w-[1186px] center-div text-container"
        style={backgroundImageStyle}
        >
      <div className="flex items-center justify-between p-4"> 
        <div className='w-4/6 start-8 top-7 relative h-[209px] w-[1030px] text-container text-center'> {/* Text */}
          <p className="font-Poppins text-[17.59px] text-[#FFFFFF] font-semibold text-left leading-[75px] tracking-[1px]">
            Contact our Expert Team
          </p>
          <h2 className="text-[#FFFFFF] font-Poppins font-bold text-[42px] leading-[50px] tracking-[0.9396284818649292px] text-left">
            To make requests for further information, contact us,
          </h2>
        </div>
        <div className="w-1/6 pr-9">  {/* Image */}
          <img src={contactImage} alt="Image description" className="w-full h-full object-cover" />
        </div>
      </div>
      
    </div>
  </div>
  )
}

export default ContactExpertTeam
