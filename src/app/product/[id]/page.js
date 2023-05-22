import React from "react";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import Product from "../../../../components/Product";
export const metadata = {
  icons: {
    icon: "/para.png",
    shortcut: "/para.png",
    apple: "/para.png",
  },
};

const page = () => {
  return (
    <>
      <Navbar />
      <Product />
      <Footer />
    </>
  );
};

export default page;
