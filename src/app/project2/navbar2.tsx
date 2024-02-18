import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoMdMenu } from "react-icons/io";
import Link from "next/link";

const Navbar2 = () => {
  return (
    <div className="h-20 w-full md:h-20  px-4 overflow-hidden flex justify-between items-center">
      <div className="flex justify-between items-center h-20 w-1/2 px-4 py-2 gap-6  md:px-7">
        <h2 className="text-lg  font-bold ">ILYA MISKOV</h2>
        <h3 className="text-lg font-medium hidden md:block">
          - Visual & product designer
          <br />
          <span>based in Estanio</span>
        </h3>
      </div>
      <div className="overflow-x-hidden w-1/2 justify-between items-center h-20 px-4 md:px-10 py-2 hidden md:flex">
        <h4 className="text-xl font-medium">Work </h4>
        <h4 className="text-xl font-medium">About </h4>
        <h4 className="text-xl font-medium">Store </h4>
        <h4 className="flex gap-2 justify-center items-center text-xl font-medium">
          {" "}
          Lets chat{" "}
          <span className="text-xl font-medium">
            {" "}
            <GoArrowUpRight />
          </span>{" "}
        </h4>
      </div>
      {/*  */}
      <div>
        <Sheet>
          <SheetTrigger>
            <IoMdMenu className="text-4xl" />
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
    </div>
  );
};

export default Navbar2;
