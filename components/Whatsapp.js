import Link from "next/link";
import styles from "../src/styles/cart.module.css";

const Whatsapp = () => {
  return (
    <div className={styles.whatsapp}>
      <Link target="_blank" href={"https://wa.me/2348129198327"}   rel="noreferrer">
        <i className="fa-brands fa-whatsapp"></i>
      </Link>
    </div>
  );
};

export default Whatsapp;
