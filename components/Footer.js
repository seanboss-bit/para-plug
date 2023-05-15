import Image from "next/image";
import styles from "../src/styles/footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className="container">
        <div className={styles.footerInner}>
          <Image
            src={
              "https://paraplug.org/wp-content/uploads/elementor/thumbs/cropped-NEW-LOGO-REDESIGN-042-q2el7izsovz57iv5cmk2me3jirzhabc6jn1lb8o5ss.png"
            }
            alt="#"
            height="100"
            width="100"
          />
          <div className={styles.links}>
            <Link href={"/store"}>store</Link>
            <Link href={"/about"}>About us</Link>
            <Link href={"/contact"}>Contact us</Link>
          </div>
          <div className={styles.socials}>
            <a href="#">
              {" "}
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
