import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import styles from '../src/styles/newsletter.module.css'

const NewsLetter = () => {
  return (
    <div className={styles.main}>
      <div className="container">
        <div className={styles.inner}>
          <h3>newsletter</h3>
          <span>get timely updates from your favourite products.</span>
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
