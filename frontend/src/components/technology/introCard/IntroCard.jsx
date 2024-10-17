import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import http from '../../../http';
import config from '../../../config';
import slugify from "slugify";
import {AiOutlineLoading3Quarters} from "react-icons/ai";

const IntroCard = () => {
  const [tech, setTech] = useState([]);
  const { baseURL } = config;

  useEffect(() => {
    // Fetching data from the API
    http.get('/technologies-api')
        .then((res) => {
          if (res.data && res.data.technologies) {
            setTech(res.data.technologies);
          } else {
            console.error('No technologies data received from API');
          }
        })
        .catch((err) => {
          console.error('Error fetching data:', err);
        });
  }, []);

  return (
      <div className="w-full mt-[70px] mb-[90px] flex justify-center">
        <div className="max-w-[930px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
          {tech.length > 0 ? (
              tech.map((item) => (
                  <Link
                      key={item.id}
                      to={item.technology_title ? `/technology/${slugify(item.technology_title, { lower: true })}/${item.id}` : "#"}
                      className="group relative border-t-8 border-orange-500 rounded-md overflow-hidden bg-white shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#ccc] opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                    <div className="relative px-6 py-4">
                      <div className="flex justify-center">
                        {item.tech_image ? (
                            <img
                                className="w-[200px] h-[130px] mt-5 transform transition duration-500 group-hover:scale-110 object-contain"
                                src={`${baseURL}${item.tech_image}`} // Ensure baseURL is used correctly
                                alt={item.technology_title || 'Technology Image'}
                            />
                        ) : (
                            <div className="w-[200px] h-[130px] mt-5 bg-gray-200">No image available</div>
                        )}
                      </div>
                      <div className="font-Poppins font-bold text-[13.23px] leading-[100.59px] mb-2 text-center line-clamp-1">
                        {item.technology_title || 'Untitled'}
                      </div>
                    </div>
                  </Link>
              ))
          ) : (
              <div className="text-center mt-8 flex flex-col justify-center items-center text-[#FF6500]">
              <AiOutlineLoading3Quarters className="animate-spin text-[#FF6500] h-8 w-8" />
              </div>
          )}
        </div>
      </div>
  );
};

export default IntroCard;


