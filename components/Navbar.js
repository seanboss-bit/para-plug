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

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [navScroll, setNavScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 90) {
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
              src="https://paraplug.org/wp-content/uploads/2023/02/PARA_BLACK-03.png"
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
                <Link href="/store">store</Link>
                <Link href="/refund">Refund Policy</Link>
                <Link href="/contact">Customer Care</Link>
                <Link href="/about">About Us</Link>
              </div>
              <Link href="/cart" className={styles.shopping}>
                <ShoppingCartIcon />
                <span>1</span>
              </Link>
            </div>
            <Link href="/cart" className={styles.shop}>
              <ShoppingCartIcon />
              <span>1</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
