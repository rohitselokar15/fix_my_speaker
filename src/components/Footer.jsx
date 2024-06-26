import React from "react";
import logo from "../assets/fix_my_speaker_logo.png";

const Footer = () => {
  return (
    <div className="bg-gray-100 p-2 lg:p-6 text-gray-700 text-center xl:px-10">
      <div className="grid lg:grid-cols-3 lg:text-justify gap-[10px]">
        <div className="mt-4 flex flex-col justify-center items-center lg:mt-10 lg:px-8">
          <img src={logo} alt="img" />
          <p className="md:px-12 lg:px-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
        </div>
        <div className="mt-10 lg:pl-20 xl:pl-36">
          <ul className="">
            <li className="font-semibold my-2 text-[17px]">Important Links</li>
            <li className="py-1">Privacy Policy</li>
            <li className="py-1">Contact Us</li>
            <li className="py-1">About Us</li>
            <li className="py-1">Terms & Condition</li>
          </ul>
        </div>
        <div className="mt-10 lg:pl-20">
          <ul className="">
            <li className="py-1 font-semibold text-[17px]">Social Media</li>
            <li className="py-1">Facebook</li>
            <li className="py-1">Instagram</li>
            <li className="py-1">Pinterest</li>
            <li className="py-1">YouTube</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 lg:mt-28">
        <p className="font-semibold">
          Copyright © 2024, All Right Reserved Fixmyspeaker
        </p>
      </div>
    </div>
  );
};

export default Footer;
