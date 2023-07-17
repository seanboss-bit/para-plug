"use client";
import { useDispatch, useSelector } from "react-redux";
import styles from "../src/styles/login.module.css";
import { logout } from "@/redux/features/userReducer";
import { useEffect } from "react";
const LoginNav = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user === null) {
      window.location = "/login";
    }
  }, [user]);
  return (
    <div className={styles.innermain}>
      <div className="container">
        <div className={styles.inner}>
          <img src="./para.png" alt="#" />
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
