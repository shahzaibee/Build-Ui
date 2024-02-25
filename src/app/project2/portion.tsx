import Image from "next/image";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import pic1 from "../../../public/assets/pic1.avif";
import pic2 from "../../../public/assets/pic2.avif";

import LeftImage from "../../../public/assets/sketch.jpg";
import RightImage from "../../../public/assets/diaomod.avif";

const Portion = () => {
  return (
    <div className="md:h-[130vh] h-[150vh]  w-full mt-5">
      <div className="h-12 flex justify-between items-center px-14 py-8 ">
        <h1 className="text-2xl     font-bold">Case studies</h1>
        <div className="flex justify-center font-bold items-center gap-8">
          <h1 className="text-2xl  font-bold">_____</h1>
          <p className="text-2xl ">01</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-14 mt-10">
        <div className="">
          <Image
            src={pic1}
            alt=""
            priority
            width={800}
            height={800}
            className="w-[550px] h-[350px] object-cover object-top-[20px] rounded-md md:h-[600px]"
          />
          <div>
            <div className="flex justify-between items-center gap-8 md:gap-0 md:px-4 mt-5">
              <h2 className="md:text-3xl text-base font-bold">Sketch</h2>
              <h4 className="md:text-xl text-base font-bold flex items-center md:gap-4">
                Content Design ,Marketing <FiArrowRight className="text-xl" />
              </h4>
            </div>
          </div>
        </div>
        <div>
          {/* <Image
            src={RightImage}
            alt=""
            priority
            width={800}
            height={800}
            className="w-[550px] h-[400px] md:h-0 object-cover object-center rounded-md mt-5 md:mt-0"
          /> */}
          <Image
            src={pic2}
            alt=""
            priority
            width={800}
            height={800}
            className="w-[550px] h-[350px] object-cover object-top-[10px] rounded-md md:h-[600px]"
          />
          <div>
            <div className="flex justify-between items-center gap-8 md:gap-0 md:px-4 mt-5">
              <h2 className="md:text-3xl text-base font-bold">Frame.io</h2>
              <h4 className="md:text-xl text-base font-bold flex items-center md:gap-4">
                User interface,Design <FiArrowRight className="text-xl" />
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portion;
