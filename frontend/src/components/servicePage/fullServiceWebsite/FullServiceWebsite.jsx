import React from 'react'
// import serviceImage from '../../../assets/images/service.png';
import bg from "../../../assets/images/contactbg.jpg";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import chevron from "../../../assets/chevron-down.svg";
import { GiOrange } from 'react-icons/gi';



/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */
const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        {header}
        <img
          className={`ml-auto transition-transform duration-200 ease-out ${
            isEnter && "rotate-90"
          }`}
          src={chevron}
          alt="Chevron"
        />
      </>
    )}
    className="border-b"
    buttonProps={{
      className: ({ isEnter }) =>
        `flex w-full p-4 text-left hover:bg-slate-100 ${
          isEnter && "bg-slate-200"
        }`
    }}
    contentProps={{
      className: "transition-height duration-200 ease-out"
    }}
    panelProps={{ className: "p-4" }}
  />
);

const backgroundImageStyle = {
  backgroundImage: ` url(${bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const FullServiceWebsite = () => {
  return (
  <div className="outer-div flex flex-col items-center justify-between h-[1000px] w-full mb-[150px]" style={backgroundImageStyle}>
    <h3 className='font-Poppins text-[42px] font-bold leading-[61.08px] tracking-[1px] mt-[110px]'>
      Full-Service Website
    </h3>

    <div className=" w-[1512px] h-[791px] flex justify-center items-center">  

      {/* left side (IMAGE) */}  
      <div className=" w-1/2">
        <img
          className="w-[532px] h-[582px] ml-[160px]"
          src={serviceImage}
          alt=""
        />
      </div>

        {/* right side () */}
        <div className='w-[567px] mr-[160px]' >
        {/* Accordion Start */}
        <div className="mx-2 my-4 border-t text-[20.23px] leading-[27.59px]">
          {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
          <Accordion transition transitionTimeout={200}>
            <AccordionItem  header="Domain names. Data Safety and Added Security Services" initialEntered>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </AccordionItem>

            <AccordionItem header="Faster 3x Load Time, CDN and Unlimited Charged Cloud ">
              Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel
              erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae.
            </AccordionItem>

            <AccordionItem header="Data analysis. Automated Restore and Backups">
              Suspendisse massa risus, pretium id interdum in, dictum sit amet ante.
              Fusce vulputate purus sed tempus feugiat.
            </AccordionItem>

            <AccordionItem header="24/7/365 Support">
              Suspendisse massa risus, pretium id interdum in, dictum sit amet ante.
              Fusce vulputate purus sed tempus feugiat.
            </AccordionItem>
          </Accordion>
        </div>
        
        <button className="font-Poppins text-[16px] w-[271px] h-[54px] left-[160px] ml-[25px] mt-[130px] ring-2 text-orange-500 rounded-md ring-orange-500 hover:bg-orange-500 hover:text-white transition-colors  duration-500">
          Explore Solutions and Prices
        </button>
      </div>
    </div>
  </div>

  )
}

export default FullServiceWebsite












