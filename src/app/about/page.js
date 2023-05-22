import React from "react";
import Navbar from "../../../components/Navbar";
import AboutBody from "../../../components/AboutBody";
import Footer from "../../../components/Footer";

export const metadata = {
  icons: {
    icon: "/para.png",
    shortcut: "/para.png",
    apple: "/para.png",
  },
};

const page = () => {
  return (
    <div>
      <Navbar />
      <AboutBody />
      <Footer />
    </div>
  );
};

export default page;
