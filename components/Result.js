import Image from "next/image";
import Link from "next/link";
import styles from "../src/styles/store.module.css";

const Result = ({ img, name, cat, price, slash, id }) => {
  return (
    <Link href={`/product/${id}`} className={styles.shoecontainer}>
      <img src={img} alt="#" />
      <h4 className={styles.shoename}>{name}</h4>
      <p className={styles.shoecat}>{cat}</p>
      <p className={styles.shoeprice}>${price}</p>
      {slash ? <p className={styles.slash}>${slash}</p> : null}
    </Link>
  );
};

export default Result;
