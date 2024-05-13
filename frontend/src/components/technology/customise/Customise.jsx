import React from 'react'
import serviceImage from '../../../assets/images/service.png';
import bg from "../../../assets/images/contactbg.jpg";





const backgroundImageStyle = {
  backgroundImage: ` url(${bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Customise = () => {
  return (
  <div className="outer-div flex flex-col items-center justify-between h-[800px] w-full mb-[150px]" style={backgroundImageStyle}>
    <h3 className='font-Poppins text-[42px] font-bold leading-[61.08px] tracking-[1px] mt-[55px]'>
      Customise Web Development
    </h3>

    <div className=" w-[1512px] h-[764px] flex justify-center items-center">  

      {/* left side (IMAGE) */}  
      <div className=" w-1/2">
        <img
          className="w-[532px] h-[582px] ml-[160px]"
          src={serviceImage}
          alt=""
        />
      </div>

        {/* right side () */}
        <div className='w-[575px] h-[456px] mr-[160px]' >

        <div className="mx-2 my-4 border-b text-[16px] leading-[27.59px]">
          <p>
            Is Your Business Vision Reflected in Your Website? We understand the importance of a website that aligns perfectly with your unique business vision. 
            Our Custom Web Development Services:
            Thorough Consultation: We initiate the process with a detailed consultation, where we actively listen to your goals and ideas to ensure a deep understanding of your vision.
            Tailor-Made Solutions: Expect nothing less than a perfect and tailor-made website that is uniquely yours, reflecting your brand identity and captivating your visitors.
            Contact us today to discuss your web development needs, and let our well-versed developers craft a captivating and customized website that brings your business vision to life. 
            Elevate your online presence and leave a lasting impression on your audience with our expertly crafted web solutions. 
          </p>
        </div>
        
        <button className="font-Poppins text-[16px] w-[347px] h-[50px] left-[160px] ml-[25px] mt-[130px] ring-2 text-orange-500 rounded-md ring-orange-500 hover:bg-orange-500 hover:text-white transition-colors  duration-500">
          Get a Quote
        </button>
      </div>
    </div>
  </div>

  )
}

export default Customise












