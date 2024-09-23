import React from "react";

const JobRequestForm = () => {
  return (
      <div className="max-w-[1100px] mx-auto py-10 lg:pt-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="font-Poppins font-bold text-2xl lg:text-4xl text-[#1F1F1F] mb-4">
            Job Request
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
                  autoComplete="name"
              />
            </div>
            <div className="w-full sm:w-1/2 px-3 mb-3">
              <input
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="phone"
                  type="text"
                  placeholder="Your Phone Number"
                  required
                  autoComplete="phone"
              />
            </div>
            <div className="w-full sm:w-1/2 px-3 mb-3">
              <input
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  autoComplete="email"
              />
            </div>
            <div className="w-full sm:w-1/2 px-3 mb-3">
              <select
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="position"
                  required
                  autoComplete="position"
              >
                <option value="" disabled selected>
                  Select Position
                </option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="product-manager">Product Manager</option>
                <option value="qa">Quality Assurance</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="w-full sm:w-1/2 px-3 mb-3">
              <input
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="cv"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  required
                  autoComplete="cv"
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
              autoComplete="message"
          ></textarea>
          </div>

          <div className="w-full px-3 mb-3 text-center pt-2">
            <button
                className="bg-[#FF6500] text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline"
                type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
  );
};

export default JobRequestForm;
