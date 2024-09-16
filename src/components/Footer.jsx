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
            <p>
              A speaker cleaner is a tool or product designed to remove dust,
              dirt, and debris from the speakers of electronic devices, such as
              smartphones, laptops, or external speakers. By keeping the speaker
              grilles and components clean, it helps maintain optimal sound
              quality and prolongs the life of the speakers.
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
              <li className="py-1">
                <Link to="/contact-us">Contact Us</Link>
              </li>
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
