import React from "react";
import blog1 from "../assets/blog1.jpeg";
import blog2 from "../assets/blog2.jpeg";
import blog3 from "../assets/blog3.jpeg";

const Blog = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <p className="text-center font-semibold text-[25px] mt-4 md:p-10">
        Blog Posts
      </p>
      <div className="mx-2 p-6 md:p-0 grid md:grid-cols-2 gap-8 md:mx-14 lg:mx-28 xl:mx-0 xl:grid-cols-3 xl:mb-20">
        <div className="shadow-lg hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer">
          <img src={blog1} alt="img" />
          <div className="p-3">
            <p className="py-2 text-[18px] font-bold text-gray-800">
              How to make Spotify sound louder
            </p>
            <p className="text-base text-justify py-1 text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
            <p className="mt-3 text-gray-600">May 5,2024</p>
          </div>
        </div>

        <div className="shadow-lg hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer">
          <img src={blog2} alt="img" />
          <div className="p-3">
            <p className="py-2 text-[18px] font-bold text-gray-800">
              How to make Spotify sound louder
            </p>
            <p className="text-base text-justify py-1 text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
            <p className="mt-3 text-gray-600">May 5,2024</p>
          </div>
        </div>

        <div className="shadow-lg hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer">
          <img src={blog3} alt="img" />
          <div className="p-3">
            <p className="py-2 text-[18px] font-bold text-gray-800">
              How to make Spotify sound louder
            </p>
            <p className="text-base text-justify py-1 text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
            <p className="mt-3 text-gray-600">May 5,2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
