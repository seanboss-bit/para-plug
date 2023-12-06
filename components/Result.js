import styles from "../src/styles/store.module.css";
import { motion } from "framer-motion";

const Result = ({ img, name, cat, price, slash, id, stock, item }) => {
  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <motion.a
      href={`/product/${id}`}
      className={styles.shoecontainer}
      variants={item}
    >
      <img src={img} alt="shoe_image" />
      <h4 className={styles.shoename}>{name}</h4>
      <p className={styles.shoecat}>{cat}</p>
      <p className={styles.shoeprice}>NGN {numberWithCommas(price)}</p>
      {stock ? (
        slash ? (
          <p className={styles.slash}>NGN {numberWithCommas(slash)}</p>
        ) : null
      ) : (
        <p>Out of stock</p>
      )}
    </motion.a>
  );
};

export default Result;
