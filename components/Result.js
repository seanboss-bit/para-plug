import Image from "next/image";
import Link from "next/link";
import styles from "../src/styles/store.module.css";

const Result = ({ img, name, cat, price, slash, id, stock }) => {
  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <Link href={`/product/${id}`} className={styles.shoecontainer}>
      <img src={img} alt="#" />
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
    </Link>
  );
};

export default Result;
