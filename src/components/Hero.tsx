import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="maindiv h-[70vh] w-full overflow-x-hidden">
      <div className="flex justify-center items-center  h-[70vh] w-full overflow-x-hidden">
        <h5 className="md:text-[140px] md:mt-24 text-red-500 text-7xl text-center tracking-tight font-extrabold uppercase overflow-hidden">
          Our Advantages
        </h5>
        <Image
          src={require("../../public/assets/p4.avif")}
          alt="p1"
          width={700}
          height={700}
          className="absolute h-[25rem] w-[20rem] object-cover object-top rounded-md -rotate-[20deg]"
          priority
        />
        <Image
          src={require("../../public/assets/p2.avif")}
          alt="p1 "
          width={700}
          height={700}
          className="absolute h-[25rem] w-[20rem] object-cover object-top rounded-md -rotate-[15deg]"
          priority
        />
        <Image
          src={require("../../public/assets/p3.avif")}
          alt="p1"
          width={700}
          height={700}
          className="absolute h-[25rem] w-[20rem] object-cover object-top  rounded-md -rotate-[10deg]"
          priority
        />
        <Image
          src={require("../../public/assets/p1.avif")}
          alt="p1"
          width={700}
          height={700}
          className="absolute h-[25rem] w-[20rem] object-cover object-top-[] rounded-xl"
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
