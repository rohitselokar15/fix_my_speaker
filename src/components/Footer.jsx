import React from "react";
import logo from "../assets/fix_my_speaker_logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto max-w-5xl p-2 lg:pt-14 text-gray-700 text-center">
        <div className="grid lg:grid-cols-3 lg:text-justify gap-10">
          <div className="flex flex-col justify-center items-center lg:px-8 xl:px-0">
            <img src={logo} alt="img" className="p-2" />
            <p className="">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
          </div>
          <div className="flex items-center justify-center">
            <ul className="">
              <li className="font-semibold my-2 text-[17px]">
                Important Links
              </li>
              <li className="py-1">
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li className="py-1">Contact Us</li>
              <li className="py-1">
                <Link to="/about">About Us</Link>
              </li>
              <li className="py-1">
                <Link to="/terms-and-conditions">Terms & Condition</Link>
              </li>
            </ul>
          </div>

          <div className=" flex items-center justify-center">
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
    </div>
  );
};

export default Footer;
