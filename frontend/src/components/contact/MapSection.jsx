import React from 'react';

const MapSection = () => {
  return (
    <div className="max-w-[1184px] mx-auto py-10 lg:pb-32 px-4 sm:px-6 lg:px-8">
    
      <div className="relative w-full h-0 pb-[56.25%] lg:pb-0 lg:h-[435px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54446.121023135674!2d74.33545287702425!3d31.472416504107066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43b88ade0fa37119%3A0xbe4473d5393ebb59!2sFAST%20NEXA!5e0!3m2!1sen!2s!4v1724165086403!5m2!1sen!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default MapSection;
