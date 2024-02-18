import React from "react";
import { MdMenu } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="main h-24 w-full flex justify-between items-center px-6 overflow-x-hidden">
      <div className="flex justify-center items-center">
        {/* <button className="font-bold text-sm border-2 border-black px-3 py-2 rounded-2xl">
          Menu
        </button> */}
        <div>
          <Sheet>
            <SheetTrigger>
              <IoMdMenu className="text-5xl" />
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

      <div className="text-2xl font-extrabold">DENTYTECH</div>
      <div className="gap-2 hidden md:flex">
        <button className="font-bold text-sm border-2 border-black px-3 py-2 rounded-2xl bg-blue-200 text-black">
          Log In
        </button>
        <button className="font-bold text-sm px-3 py-2 rounded-2xl bg-orange-500 text-white">
          Sign Up
        </button>
      </div>
      {/* Mobile */}
    </div>
  );
};

export default Navbar;
