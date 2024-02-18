import React from "react";
import Header from "./Header";
import About from "./About";
import Intro from "./intro";
import Footer from "@/components/Footer";
import { FooterThree } from "./Footer";
const page = () => {
  return (
    <div>
      <Header />
      <About />
      <Intro />
      <FooterThree />
    </div>
  );
};

export default page;
