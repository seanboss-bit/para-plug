"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../src/styles/login.module.css";
import { logout } from "@/redux/features/userReducer";

import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
const LoginNav = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (user === null || user?.isAdmin === false) {
      router.push("/login");
    }
  }, [user]);
  return (
    <div className={styles.innermain}>
      <div className="container">
        <div className={styles.inner}>
          <img src="/para.png" alt="#" />
          {show ? (
            <XMarkIcon onClick={() => setShow(!show)} />
          ) : (
            <Bars3Icon onClick={() => setShow(!show)} />
          )}
          <div className={show ? styles.links : styles.linksno}>
            <Link href="/admin">Admin</Link>
            <Link href="/add">Add</Link>
            <Link href="/orders">Orders</Link>
            <Link href="/shoes">All Shoes</Link>
            <Link href="/users">All Customers</Link>
          </div>
          <div className={styles.words} onClick={() => dispatch(logout())}>
            <div className={styles.username}>
              <p>{user?.username}</p>
              <p>{user?.isAdmin && "Admin"}</p>
            </div>
            <img src={user?.image} alt="#" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginNav;
