import React from "react";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaDribbble } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <div className="h-[80vh] md:h-[80vh] w-full flex flex-col md:flex-row bg-[#f5f3ef] md:justify-between md:items-center">
        {/* left */}
        <div className="md:h-[60vh] md:border-l-4 border-black relative px-6 my-4 md:w-1/3 md:order-2 order-none md:px-14 md:py-[30px]">
          <h1 className="text-black text-3xl font-bold">(About Me)</h1>
          <div className="flex absolute md:bottom-[30px] gap-2 text-2xl mt-5 px-2">
            <div className="bg-black text-white px-4 py-3 font-bold rounded-full">
              <CiInstagram />
            </div>
            <div className="bg-black text-white px-4 py-3 font-bold rounded-full">
              <CiTwitter />
            </div>
            <div className="bg-black text-white px-4 py-3 font-bold rounded-full">
              <FaDribbble />
            </div>
          </div>
        </div>
        {/* right */}
        <div className="mt-20 md:h-[80vh] md:mt-0 md:w-2/3 md:px-8 md:py-[30px]">
          <h1 className="text-5xl px-5 font-semibold md:text-[80px] leading-none md:font-extrabold">
            As a digital designer, I focus on producing top-notch and impactful
            digital experiences.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
