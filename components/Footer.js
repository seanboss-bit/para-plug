import styles from "../src/styles/footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className="container">
        <div className={styles.footerInner}>
          <div className={styles.writeup}>
            <h4>paraplug.</h4>
            <p>
              Explore our sleek and modern online store, discover limited
              editions and exclusive releases, and join our vibrant community of
              sneaker aficionados. Trust in Paraplug to provide an unparalleled
              shopping experience, where every step you take is infused with
              style and authenticity
            </p>
          </div>
          <div className={styles.cat}>
            <p>Air Jordan</p>
            <span>Air Jordan 1</span>
            <span>womens jordan</span>
            <span>air jordan 11</span>
            <span>air jordan 4</span>
            <span>jordan 1 mid</span>
          </div>
          <div className={styles.cat}>
            <p>nike</p>
            <span>nike dunk</span>
            <span>nike sb dunk</span>
            <span>nike blazer</span>
            <span>nike air force 1</span>
            <span>womens air force 1s</span>
            <span>womens nike dunks</span>
            <span>nike running shoes</span>
          </div>
          <div className={styles.links}>
            <p>quick links</p>
            <Link href={"/store"}>store</Link>
            <Link href={"/about"}>About us</Link>
            <Link href={"/contact"}>Contact us</Link>
          </div>
          <div className={styles.socials}>
            <h6>our socials</h6>
            <div>
              <a
                href="https://www.instagram.com/p/CsYyBmvB99_/?igshid=NTc4MTIwNjQ2YQ=="
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                {" "}
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                {" "}
                <i className="fa-brands fa-snapchat"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
