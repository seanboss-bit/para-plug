import React from "react";
import styles from "../src/styles/recomended.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
const RecCard = ({ kick, item }) => {
  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <motion.a
      href={`/product/${kick._id}`}
      className={styles.card}
      variants={item}
    >
      <img src={kick.image} alt="#" />
      <h5>{kick.name}</h5>
      <p className={styles.price}>NGN {numberWithCommas(kick.price)}</p>
      {kick.slashPrice ? (
        <p className={styles.sale}>
          last sale: NGN {numberWithCommas(kick.slashPrice)}
        </p>
      ) : null}
    </motion.a>
  );
};

export default RecCard;
