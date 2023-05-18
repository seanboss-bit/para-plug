import Image from "next/image";
import Link from "next/link";
import styles from "../src/styles/store.module.css";

const Result = ({ img, name, cat, price, slash }) => {
  return (
    <Link href="/product/123" className={styles.shoecontainer}>
      <img src={img} alt="#" />
      <h4 className={styles.shoename}>{name}</h4>
      <p className={styles.shoecat}>{cat}</p>
      <p className={styles.shoeprice}>${price}</p>
      <p className={styles.slash}>${slash}</p>
    </Link>
  );
};

export default Result;
