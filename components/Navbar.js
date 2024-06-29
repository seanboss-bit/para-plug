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
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [navScroll, setNavScroll] = useState(false);
  const route = usePathname();
  const router = useRouter();
  const products = useSelector((state) => state.cart?.products);
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 110) {
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
          {!user ? null : (
            <div className={styles.bars} onClick={() => setOpenNav(true)}>
              <Bars3Icon />
            </div>
          )}
          <Link href="/" className={styles.imgcont}>
            <Image
              src="https://res.cloudinary.com/dvo4tlcrx/image/upload/v1719649548/head_e9wnex.png"
              alt="header_image"
              width={100}
              height={100}
            />
          </Link>
          <div className={styles.res}>
            <div className={openNav ? styles.reslink : styles.links}>
              <div className={styles.bars} onClick={() => setOpenNav(false)}>
                <XMarkIcon />
              </div>
              <div className={styles.small}>
                {user ? (
                  <div className={styles.userPres}>
                    <Link href="/cart" className={styles.shopping}>
                      <ShoppingCartIcon />
                      {products?.length > 0 ? (
                        <span>{products.length}</span>
                      ) : null}
                    </Link>
                    <img
                      src={user?.image}
                      alt="user_img"
                      onClick={() => router.push(`/dashboard/${user?._id}`)}
                    />
                  </div>
                ) : (
                  <div className={styles.resLog}>
                    <Link href={"/login"}>login</Link>
                    <Link href={"/register"}>register</Link>
                  </div>
                )}
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
              <div className={styles.big}>
                {user ? (
                  <div className={styles.userPres}>
                    <Link href="/cart" className={styles.shopping}>
                      <ShoppingCartIcon />
                      {products?.length > 0 ? (
                        <span>{products.length}</span>
                      ) : null}
                    </Link>
                    <img
                      src={user?.image}
                      alt="user_img"
                      onClick={() => router.push(`/dashboard/${user?._id}`)}
                    />
                  </div>
                ) : (
                  <div className={styles.resLog}>
                    <Link href={"/login"}>login</Link>
                    <Link href={"/register"}>register</Link>
                  </div>
                )}
              </div>

              <div className={styles.respic}>
                <Image
                  src="/para.png"
                  height={100}
                  width={100}
                  alt="paraplug"
                />
              </div>
            </div>
            {user ? (
              <Link href="/cart" className={styles.shop}>
                <ShoppingCartIcon />
                {products?.length > 0 ? <span>{products.length}</span> : null}
              </Link>
            ) : (
              <div className={styles.bars} onClick={() => setOpenNav(true)}>
                <Bars3Icon />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
