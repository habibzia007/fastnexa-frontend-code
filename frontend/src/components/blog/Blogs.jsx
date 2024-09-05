
import React, {useEffect, useState} from "react";
import Blog from "./Blog";
import { BlogCardData } from "../../utils/fakedb/data.jsx";
import config from '../../config';
import http from '../../http'

const Blogs = () => {
  const [blogs, setBlogs] = useState({});

  const { baseURL } = config;


  useEffect(() => {
    http.get('/blog-api')
        .then((res) => {
          setBlogs(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.error('Error fetching data:', err); // Log any errors
        });

  }, []);
  return (
    <div className="relative w-full pb-40 mx-auto py-12 blog-container">
      <div className="max-w-[1184.44px] mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="font-Poppins font-semibold text-[12px] lg:text-[16px] text-[#FF6500] leading-[28.19px] tracking-wider text-center">
          {blogs.blog_api && blogs.blog_api.length > 0 && blogs.blog_api[0].section_title}
        </h3>
        <h3 className="font-Poppins font-semibold text-[22px] leading-[33.08px] lg:text-[42px] lg:leading-[61.08px] pt-2 text-[#232F3B] text-center">
          {blogs.blog_api && blogs.blog_api.length > 0 && blogs.blog_api[0].section_heading}
        </h3>

        <div className="list-of-blog grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-6 gap-y-[8.5rem]">
          {blogs.blogitems_api && blogs.blogitems_api.map((data, index) => (
            <Blog key={index} data={data} baseURL={baseURL} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

