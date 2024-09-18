"use client";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import StoreBody from "../../../components/StoreBody";
export const metadata = {
  icons: {
    icon: "./para.png",
    shortcut: "./para.png",
    apple: "./para.png",
  },
};

const page = () => {
  return (
    <>
      <Navbar />
      <StoreBody />
      <Footer />
    </>
  );
};

export default page;
