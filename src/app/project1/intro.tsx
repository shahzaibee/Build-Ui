import React from "react";
import { FiArrowDownRight } from "react-icons/fi";

const Intro = () => {
  return (
    <div className="work w-full overflow-hidden md:w-[95%] h-full md:bg-transparent bg-[#f5f3ef] mx-auto mb-8 md:flex md:h-[90vh] border-b-2 border-t-2 border-black">
      {/* left */}
      <div className="w-full md:w-[40%] md:h-[90vh">
        <div className="flex justify-between p-5 md:p-10 md:border-r-2 md:border-black md:h-[90%] md:my-8">
          <h1 className="text-2xl font-semibold">(What I do)</h1>
          <FiArrowDownRight className="text-3xl" />
        </div>
      </div>
      {/* right */}
      <div className="w-full md:w-[76%] h-90vh">
        {/* first part */}
        <div className="flex flex-col md:flex-row justify-between items-center md:border-b-2 border-black md:w-[90%] md:mx-auto">
          <div className="md:p-10 p-4 space-y-4 md:space-y-0 md:border-t-0 border-black h-[24vh] md:h-[45vh]">
            <h1 className="text-2xl font-extrabold">Digital Design</h1>
            <p className="text-lg md:pt-5">
              I create stunning digital designs that engage and inspire your
              audience. Let me bring your brand to life with my skills.
            </p>
          </div>
          <div className="md:p-10 p-4 border-t-2 md:border-t-0 border-black h-[24vh] md:h-[45vh]">
            <div className="md:border-l-2 border-black md:pl-7 space-y-4 md:space-y-0">
              <h1 className="text-2xl font-extrabold">Art Direction</h1>
              <p className="text-lg md:pt-5">
                My art direction expertise ensures that your project is on
                brand, on message, and visually stunning. Lets tell your story
                together.
              </p>
            </div>
          </div>
        </div>
        {/* second part */}
        <div className="flex flex-col md:w-[90%] mx-auto md:flex-row justify-between items-center">
          <div className="md:p-10  p-4 space-y-4 md:space-y-0  border-t-2 md:border-t-0 border-black h-[24vh] md:h-[45vh] ">
            <h1 className="text-2xl font-extrabold">Interaction Design</h1>
            <p className="text-lg md:pt-5">
              I create stunning digital designs that engage and inspire your
              audience. Let me bring your brand to life with my skills.
            </p>
          </div>
          <div className="md:p-10 p-4 border-t-2 md:border-t-0 border-black h-[24vh] md:h-[45vh]">
            <div className="md:border-l-2 border-black md:pl-7 space-y-4 md:space-y-0">
              <h1 className="text-2xl font-extrabold">Motion Design</h1>
              <p className="text-lg md:pt-5">
                My art direction expertise ensures that your project is on
                brand, on message, and visually stunning. Lets tell your story
                together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
