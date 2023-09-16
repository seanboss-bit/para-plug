"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../src/styles/login.module.css";
import { logout } from "@/redux/features/userReducer";

import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
const LoginNav = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (user === null) {
      window.location = "/login";
    }
  }, [user]);
  return (
    <div className={styles.innermain}>
      <div className="container">
        <div className={styles.inner}>
          <img src="/para.png" alt="#" />
          {show ? <XMarkIcon onClick={() => setShow(!show)}/> : <Bars3Icon onClick={() => setShow(!show)}/>}
          <div className={show ? styles.links : styles.linksno}>
            <Link href="/admin">Admin</Link>
            <Link href="/add">Add</Link>
            <Link href="/orders">Orders</Link>
            <Link href="/shoes">All Shoes</Link>
          </div>
          <div className={styles.words} onClick={() => dispatch(logout())}>
            <div>
              <p>{user?.username}</p>
              <p>{user?.role}</p>
            </div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
              alt="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginNav;
