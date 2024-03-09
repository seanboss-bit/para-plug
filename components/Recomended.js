"use client";
import React, { useEffect, useState } from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import styles from "../src/styles/recomended.module.css";
import RecCard from "./RecCard";
import { publicRequest } from "../requests";
import { motion } from "framer-motion";

const Recomended = () => {
  const [kicks, setKicks] = useState([]);
  const getRandom = async () => {
    try {
      const res = await publicRequest.get("/product/admin/kicks");
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

  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };
  const item = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: { ease: "easeIn", duration: 0.9 },
    },
  };

  return (
    <div>
      <div className="container">
        <h3 className={styles.heading}>
          Recommended For You <QuestionMarkCircleIcon />
        </h3>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className={styles.recommend}
          viewport={{once: true, amount:0.25}}
        >
          {kicks.map((kick) => (
            <RecCard key={kick._id} kick={kick} item={item} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Recomended;
