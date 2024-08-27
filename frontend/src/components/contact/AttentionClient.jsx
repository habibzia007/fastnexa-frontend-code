import React from "react";
import { attentionClientData } from "../../utils/fakedb/data.jsx";
import {IoLogoLinkedin} from "react-icons/io5";
import {MdOutlineFacebook} from "react-icons/md";
import {TiSocialInstagram} from "react-icons/ti";

const AttentionToEveryClient = () => {
  return (
    <div className="max-w-[1184px] mx-auto py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 lg:mb-12">
        <h2 className="font-Poppins font-bold text-2xl lg:text-4xl text-[#1F1F1F] mb-4">
            Attention to Every Client
        </h2>
        <p className="font-Poppins md:text-sm text-xs lg:text-base text-[#747474] max-w-3xl mx-auto">
            We value your feedback, inquiries, and business opportunities. Whether you’re looking to learn more about our services, explore partnership opportunities, or need support, our team is here to assist you.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {attentionClientData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 py-6 px-4"
          >
            <img
              src={card.image}
              alt={card.title}
              className="lg:h-[4.188rem] object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="font-Poppins font-bold md:text-xl text-lg text-[#1F1F1F] mb-2">
                {card.title}
              </h3>
              <p className="font-Poppins md:text-sm text-xs text-[#747474]">
                {card.description}
              </p>
              {card.socialIcons && (
                <div className="flex justify-center space-x-4 mt-4">
                    <a
                      href="https://www.linkedin.com/company/fast-nexa/posts/?feedView=all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IoLogoLinkedin
                        className="w-7 h-7 transition transform hover:scale-110 text-[#FF6500]"
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/fastnexa"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MdOutlineFacebook
                        className="w-7 h-7 transition transform hover:scale-110 text-[#FF6500]"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/fast_nexa?igsh=cHk3ZDZmbmZvZHdq"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TiSocialInstagram
                        className="w-7 h-7 transition transform hover:scale-110 text-[#FF6500]"
                      />
                    </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttentionToEveryClient;
