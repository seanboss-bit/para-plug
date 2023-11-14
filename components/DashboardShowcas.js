"use client";
import { useSelector } from "react-redux";
import styles from "../src/styles/dashboard.module.css";

const DashboardShowcas = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <div className={styles.showcasemain}>
      <div className="container">
        <h2>Welcome, {user?.fullName}</h2>
        <a href="/store">return to store?</a>
      </div>
    </div>
  );
};

export default DashboardShowcas;
