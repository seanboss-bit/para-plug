"use client";
import Link from "next/link";
import styles from "../src/styles/showcase.module.css";
import { motion } from "framer-motion";

const Showcase = () => {
  return (
    <div className={styles.main}>
      <div className="container">
        <div className={styles.inner}>
          <motion.h1
            initial={{
              opacity: 0,
              y: 500,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: .9, ease: "easeInOut" }}
          >
            Para Plug
          </motion.h1>
          <motion.h4
            initial={{
              opacity: 0,
              y: 500,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          >
            Your Store For All Exclusive Nike And Jordan Sneakers
          </motion.h4>
          <motion.p
            initial={{
              opacity: 0,
              y: 500,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            It is all about new arrivals!!!
          </motion.p>
          <motion.a
            href={"/store"}
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          >
            shop now
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
