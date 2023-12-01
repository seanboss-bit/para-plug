"use client";
import { useEffect } from "react";
import { publicRequest } from "../requests";
import { useState } from "react";
import styles from "../src/styles/store.module.css";
import Link from "next/link";

const AllShoes = () => {
  const [showShoe, setShowShoe] = useState([]);
  const getAllShoes = async () => {
    try {
      const res = await publicRequest.get("/product");
      setShowShoe(res.data.allKicks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllShoes();
  }, []);
  return (
    <div>
      <div className={styles.results}>
        {showShoe.map((product) => (
          <Link href={`/shoes/${product._id}`} className={styles.subresult} key={product._id}>
            <img src={product.image} alt="#" />
            <p>{product.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllShoes;
