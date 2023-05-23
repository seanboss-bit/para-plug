"use client";
import { useEffect, useState } from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import StoreBody from "../../../components/StoreBody";
import { publicRequest } from "../../../requests";
import { useDispatch } from "react-redux";
import { addShoe } from "@/redux/features/shoeReducer";

export const metadata = {
  icons: {
    icon: "/para.png",
    shortcut: "/para.png",
    apple: "/para.png",
  },
};

const page = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const getAllShoes = async () => {
    try {
      const res = await publicRequest.get("/product");
      setProducts(res.data.allKicks);
      dispatch(addShoe(res.data.allKicks));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllShoes();
  }, []);
  return (
    <div>
      <Navbar />
      <StoreBody products={products} />
      <Footer />
    </div>
  );
};

export default page;
