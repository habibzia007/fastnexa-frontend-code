import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import WhatWeProvide from "../../components/whatWeProvide/WhatWeProvide";
import OurClients from "../../components/OurClients";
import ChooseUs from "../../components/chooseUs/ChooseUs";

const Home = () => {
  return (
    <main className="h-[6850px] w-full bg-[#FFFFFF]">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <WhatWeProvide/>
      <OurClients/>
      <ChooseUs/>
    </main>
  );
};

export default Home;
