import Image from "next/image";
import styles from "../src/styles/footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
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
            <Link href={"/about"}>about us</Link>
            <Link href={"/contact"}>contact us</Link>
          </div>
          <div className={styles.socials}>
          <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
