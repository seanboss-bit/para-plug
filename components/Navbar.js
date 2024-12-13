"use client";
import { useState } from "react";
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
  const route = usePathname();
  const router = useRouter();
  const products = useSelector((state) => state.cart?.products);
  const user = useSelector((state) => state.user.user);
  return (
    <div className={styles.mainnav}>
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
            <svg viewBox="0 0 100 100" className={styles.christmasHat}>
              <path d="M50 10 L80 70 L20 70 Z" className={styles.hatbody} />
              <path d="M20 70 L80 70 Q50 80 20 70" className={styles.hattrim} />
              <circle cx="50" cy="10" r="6" className={styles.hatpom} />
            </svg>
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
