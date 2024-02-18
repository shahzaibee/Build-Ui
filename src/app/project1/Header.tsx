"use client";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoMdMenu } from "react-icons/io";

import { GoArrowDownRight } from "react-icons/go";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-[100%] min-h-screen bg-[#f5f3ef]">
      <div className="flex flex-col ">
        <div className="p-4 md:p-20 md:text-[150px] scroll-m-20 text-6xl font-extrabold tracking-tight md:text-9xl -mb-14">
          <h1 className="">Bent Lindberg</h1>
          <p className="">Digital Designer</p>
        </div>
        <div className="flex text-lg gap-3 top-2 right-3 fixed md:top-8 md:right-8">
          <div className="bg-black text-white px-4 md:px-6 md:py-2 rounded-full flex justify-center items-center">
            <h3 className="text-2xl">0</h3>
          </div>
          <div className="bg-black  relative text-white p-2 md:px-5 md:py-2 rounded-full flex justify-center items-center">
            <h3 className="text-xl">
              <div>
                <Sheet>
                  <SheetTrigger>
                    <IoMdMenu className="text-2xl" />
                  </SheetTrigger>
                  <SheetContent className="bg-black text-white border-none">
                    <SheetHeader>
                      <SheetDescription>
                        <ul className="space-y-12 text-white text-2xl pl-5 mt-7">
                          <li>
                            {" "}
                            <Link href={"/"}> Home </Link>
                          </li>
                          <li>
                            {" "}
                            <Link href={"/project1"}> Project one </Link>
                          </li>
                          <li>
                            {" "}
                            <Link href={"/project2"}> Project two </Link>
                          </li>
                        </ul>
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </div>
            </h3>
          </div>
        </div>
        <div className="bg-[#f5f3ef] mt-20 md:mt-0 flex flex-col p-4 md:flex-row md:justify-between md:items-center md:px-[75px] text-2xl space-y-1  md:space-y-0 md:text-3xl">
          <h1>(Berlin, Germany)</h1>
          <div className="md:flex hidden md:justify-center items-center gap-x-1 md:gap-x-2">
            <GoArrowDownRight />
            <p>Scroll down</p>
          </div>
        </div>
      </div>
      <Image
        src={require("../../../public/assets/boy.webp")}
        alt="image"
        width={1500}
        height={1500}
        className="w-[100%] h-[70vh] md:h-[90vh] object-cover object-top"
        priority
      />
    </div>
  );
};

export default Header;
