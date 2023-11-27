import Link from "next/link";
import styles from "../src/styles/thanks.module.css";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const Thanks = () => {
  return (
    <div>
      <div className="container">
        <div className={styles.thanks}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/1200px-Eo_circle_green_checkmark.svg.png"
            alt="#"
          />
          <h2>Thank You For shopping with us</h2>
          <p>Enjoy your new sneakers</p>
          <Link href={"/"}>
            {" "}
            <ArrowLeftIcon /> return to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
