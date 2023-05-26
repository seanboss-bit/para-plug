"use client";
import { useEffect, useState } from "react";
import styles from "../src/styles/nav.module.css";
import Link from "next/link";
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [navScroll, setNavScroll] = useState(false);
  const route = usePathname();
  const products = useSelector((state) => state.cart?.products);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 50) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    });
  }, []);
  return (
    <div className={navScroll ? styles.mainnav2 : styles.mainnav}>
      <div className="container">
        <div className={styles.navinner}>
          <Link href="/">
            <Image
              src="/para2.png"
              alt="#"
              width={100}
              height={100}
            />
          </Link>
          <div className={styles.res}>
            <div className={styles.bars} onClick={() => setOpenNav(true)}>
              <Bars3Icon />
            </div>
            <div className={openNav ? styles.reslink : styles.links}>
              <div className={styles.bars} onClick={() => setOpenNav(false)}>
                <XMarkIcon />
              </div>
              <div className={styles.navlink}>
                <Link
                  href="/store"
                  className={route === "/store" ? styles.active : null}
                >
                  store
                </Link>
                <Link
                  href="/refund"
                  className={route === "/refund" ? styles.active : null}
                >
                  Refund Policy
                </Link>
                <Link
                  href="/contact"
                  className={route === "/contact" ? styles.active : null}
                >
                  Customer Care
                </Link>
                <Link
                  href="/about"
                  className={route === "/about" ? styles.active : null}
                >
                  About Us
                </Link>
              </div>
              <Link href="/cart" className={styles.shopping}>
                <ShoppingCartIcon />
                {products?.length > 0 ? <span>{products.length}</span> : null}
              </Link>
            </div>
            <Link href="/cart" className={styles.shop}>
              <ShoppingCartIcon />
              {products?.length > 0 ? <span>{products.length}</span> : null}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
