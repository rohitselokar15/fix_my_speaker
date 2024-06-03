import React from "react";
import logo from "../assets/fix_my_speaker_logo.png";

const Footer = () => {
  return (
    <div className="container xl:mx-auto text-center mx-4 text-gray-700">
      <div className="grid lg:grid-cols-3">
        <div className="mt-4 flex flex-col justify-center items-center">
          <img src={logo} alt="img" />
          <p className="md:px-12 lg:px-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
        </div>
        <div className="mt-4">
          <ul>
            <li className="font-semibold my-2 text-[17px]">Important Links</li>
            <li className="py-1">Privacy Policy</li>
            <li className="py-1">Contact Us</li>
            <li className="py-1">About Us</li>
            <li className="py-1">Terms & Condition</li>
          </ul>
        </div>
        <div>
          <ul className="mt-4">
            <li className="py-1 font-semibold text-[17px]">Social Media</li>
            <li className="py-1">Facebook</li>
            <li className="py-1">Instagram</li>
            <li className="py-1">Pinterest</li>
            <li className="py-1">YouTube</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 lg:mt-20">
        <p className="font-semibold">
          Copyright © 2024, All Right Reserved Fixmyspeaker
        </p>
      </div>
    </div>
  );
};

export default Footer;
