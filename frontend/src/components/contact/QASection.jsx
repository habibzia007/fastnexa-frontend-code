import React from "react";

const ContactFormSection = () => {
  return (
    <div className="max-w-[1100px] mx-auto py-10 lg:pt-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 lg:mb-12">
        <h2 className="font-Poppins font-bold text-2xl lg:text-4xl text-[#1F1F1F] mb-4">
          Get in Touch
        </h2>
        <p className="font-Poppins md:text-sm text-xs lg:text-base text-[#747474] max-w-3xl mx-auto">
          We are always eager to connect with you. Please feel free to reach out through any of the following channels:
        </p>
      </div>
      <form className="mt-6">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full sm:w-1/2 px-3 mb-3">
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="name"
              type="text"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="w-full sm:w-1/2 px-3 mb-3">
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="phone"
              type="text"
              placeholder="Your Phone Number"
              required
            />
          </div>
          <div className="w-full sm:w-1/2 px-3 mb-3">
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="w-full sm:w-1/2 px-3 mb-3">
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="subject"
              type="text"
              placeholder="Subject"
              required
            />
          </div>
        </div>
        <div className="w-full mb-3">
          <textarea
            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <div className="w-full px-3 mb-3 text-center pt-2">
          {/*<p className="text-[#232F3B] text-sm mb-4"> <span className="text-red-600">* </span>Aenean rhoncus ultricies semper. Mauris et cursus est. Maecenas cursus nibh vel ex faucibus consequat</p>*/}
          <button
            className="bg-[#FF6500]  text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactFormSection;
