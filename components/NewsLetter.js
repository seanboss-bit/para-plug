import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import styles from '../src/styles/newsletter.module.css'

const NewsLetter = () => {
  return (
    <div className={styles.main}>
      <div className="container">
        <div className={styles.inner}>
          <h3>Join our community</h3>
          <span>get 10% off your first order on the website and be the first to get the latest updates on your promotion campaigns, products and services</span>
          <div className={styles.inputbox}>
            <input type="email" placeholder="Enter Email" />
            <button>
              <PaperAirplaneIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
