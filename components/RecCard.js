import React from "react";
import styles from "../src/styles/recomended.module.css";
const RecCard = () => {
  return (
    <div className={styles.card}>
      <img
        src="https://images.stockx.com/images/Air-Jordan-1-High-OG-Spider-Man-Across-the-Spider-Verse-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1683568981&q=60"
        alt="#"
      />
      <h5>jordan 1 high</h5>
      <span className={styles.low}>lowest ask</span>
      <p className={styles.price}>$191</p>
      <p className={styles.sale}>last sale: $224</p>
    </div>
  );
};

export default RecCard;
