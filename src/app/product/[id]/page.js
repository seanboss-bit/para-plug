"use client";
import React from "react";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import Product from "../../../../components/Product";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { publicRequest } from "../../../../requests";
import { addProduct } from "@/redux/features/cartReducer";

const page = () => {
  const id = useParams();
  const dispatch = useDispatch();
  const [singleItem, setSingleItem] = useState();
  const [size, setSize] = useState("size");

  const getItem = async () => {
    try {
      const res = await publicRequest.get("product/find/" + id.id);
      setSingleItem(res.data.product);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getItem();
  }, [id.id]);

  const [bigimg, setBigImg] = useState(singleItem?.extraImg[0]);

  const activePic = (i) => {
    setBigImg(singleItem?.extraImg[i]);
  };

  const add = (product) => {
    if (size === "size") {
      toast.error("Please Select Your Kicks Size");
    } else {
      dispatch(addProduct({ ...product, size }));
      
    }
  };
  return (
    <>
      <Navbar />
      <Product  singleItem={singleItem} bigimg={bigimg} add={add} activePic={activePic}/>
      <Footer />
    </>
  );
};

export default page;
