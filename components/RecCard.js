import React from "react";
import styles from "../src/styles/recomended.module.css";
import Link from "next/link";
const RecCard = ({ kick }) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <Link href={`/product/${kick._id}`} className={styles.card}>
      <img src={kick.image} alt="#" />
      <h5>{kick.name}</h5>
      <p className={styles.price}>NGN {numberWithCommas(kick.price)}</p>
      <p className={styles.sale}>
        last sale: NGN {numberWithCommas(kick.slashPrice)}
      </p>
    </Link>
  );
};

export default RecCard;
