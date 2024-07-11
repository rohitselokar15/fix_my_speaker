import React from "react";

const Subscribe = () => {
  return (
    <div className="mt-8 bg-gray-800 text-white p-3 md:p-6 md:text-center md:px-24 lg:flex lg:flex-col justify-center items-center">
      <p className="text-[19px] font-semibold">Subscribe</p>
      <p className="py-4 text-justify text-[14px] font-semibold">
        {" "}
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
      </p>
      <div className="lg:flex justify-evenly items-center">
        <div className="py-2">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-gray-700 w-full p-1.5 lg:w-[220px] lg:mr-4"
          />
        </div>
        <div className="py-2">
          <input
            type="email"
            placeholder="Enter email"
            className="bg-gray-700 w-full p-1.5 px-2 lg:w-[220px]"
          />
        </div>
        <button className="p-2 bg-blue-400 my-4 rounded-md px-4 lg:mx-4 xl:p-1.5 xl:px-5">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
