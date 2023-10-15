"use client";
import styles from "../../styles/store.module.css";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import StoreBody from "../../../components/StoreBody";

const page = () => {
  return (
    <div>
      <Navbar />
      <StoreBody />
      <Footer />
    </div>
  );
};

export default page;
