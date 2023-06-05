"use client";
import React, { useEffect, useState } from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import styles from "../src/styles/recomended.module.css";
import RecCard from "./RecCard";
import { publicRequest } from "../requests";

const Recomended = () => {
  const [kicks, setKicks] = useState([]);
  const getRandom = async () => {
    try {
      const res = await publicRequest.get("/product");
      let lastSale = res.data.allKicks.filter((item) => {
        if (item.slashPrice) {
          return item;
        }
      });
      setKicks(lastSale.sort(() => Math.random() - Math.random()).slice(0, 6));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRandom();
  }, []);

  return (
    <div>
      <div className="container">
        <h3 className={styles.heading}>
          Recommended For You <QuestionMarkCircleIcon />
        </h3>
        <div className={styles.recommend}>
          {kicks.map((kick) => (
            <RecCard key={kick._id} kick={kick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recomended;
