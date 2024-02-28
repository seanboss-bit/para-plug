import styles from "../src/styles/store.module.css";
import { motion } from "framer-motion";

const Result = ({
  img,
  name,
  cat,
  price,
  slash,
  id,
  stock,
  item,
  dateAdded,
}) => {
  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const timeDifference = new Date() - new Date(dateAdded);
  const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return (
    <motion.a
      href={`/product/${id}`}
      className={styles.shoecontainer}
      variants={item}
    >
      {number_of_days > 7 ? null : <span className={styles.new}>new</span>}
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
