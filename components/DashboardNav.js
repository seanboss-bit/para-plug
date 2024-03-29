"use client";
import { useDispatch, useSelector } from "react-redux";
import styles from "../src/styles/dashboard.module.css";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { logout } from "@/redux/features/userReducer";

const DashboardNav = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.push("/");
    }
  }, [user]);

  const out = () => {
    dispatch(logout());
    router.push("/");
  };
  return (
    <div className={styles.navmain}>
      <div className="container">
        <div className={styles.navinner}>
          <div className={styles.navimg}>
            <img src={user?.image} alt="user_img" />
            <div>
              <p>{user?.username}</p>
              <p style={{
                textTransform: 'lowerCase',
                fontSize: '13px'
              }}>{user?.email}</p>
              <span>let's get it</span>
            </div>
          </div>
          <ArrowLeftOnRectangleIcon onClick={() => out()} />
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
