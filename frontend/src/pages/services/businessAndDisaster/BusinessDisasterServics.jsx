import aboutusservicesbg from "../../../assets/images/aboutusservicebg.jpg";
import ServicesFeatures from "../../../components/services/ServicesFeatures.jsx";

// eslint-disable-next-line react/prop-types
const AboutUsServices = ({serviceFeatures,baseURL}) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${aboutusservicesbg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="relative w-full h-auto py-10 lg:py-[45px] mb-[2rem] sm:mb-0"
      style={backgroundImageStyle}
    >
        < ServicesFeatures serviceFeatures={serviceFeatures} baseURL={baseURL}/>
    </div>
  );
};

export default AboutUsServices;
