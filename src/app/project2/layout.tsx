import Navbar from "@/components/Navbar";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="bg-[#f5f3ef]">{children}</div>;
};

export default layout;
