import React from "react";
import { FaArrowDown } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="px-6 mt-2 md:mt-7 flex flex-col gap-5 md:flex-row justify-between items-center ">
      <h1>Your Smile, Our Passion </h1>
      <div className="border-2 border-black p-6 rounded-full ">
        <FaArrowDown />
      </div>
      <div>
        <div className="flex gap-2 justify-around">
          <CiInstagram className="text-2xl" />
          <CiYoutube className="text-2xl" />
          <CiFacebook className="text-2xl" />
        </div>
        <h1 className="pt-2">Best Start up of 2024</h1>
      </div>
    </div>
  );
};

export default Footer;
