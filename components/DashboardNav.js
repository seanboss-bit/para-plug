import styles from "../src/styles/dashboard.module.css";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";

const DashboardNav = () => {
  return (
    <div className={styles.navmain}>
      <div className="container">
        <div className={styles.navinner}>
          <div className={styles.navimg}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
              alt="user_img"
            />
            <div>
              <p>abubakar musa</p>
              <span>let's get it</span>
            </div>
          </div>
          <ArrowLeftOnRectangleIcon />
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
