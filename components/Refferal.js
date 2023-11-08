import styles from "../src/styles/dashboard.module.css";
import { DocumentDuplicateIcon } from "@heroicons/react/24/solid";

const Refferal = () => {
  return (
    <div>
      <div className="container">
        <div className={styles.refInner}>
          <h2>referal system</h2>
          <p>
            refer 10 people and get a free sneaker from our sneaker collection
          </p>
        </div>
        <div className={styles.refBody}>
          <h3>
            your referals <span>3/10</span>
          </h3>
          <p>
            your <span>seven</span> steps away from claiming a free sneaker
          </p>

          <div className={styles.progressBody}>
            <div className={styles.progress}>
              <div className={styles.progressBar}></div>
            </div>
            <span>3/10 referals made</span>
          </div>

          <h4 className={styles.shareMain}>share link</h4>
          <span className={styles.shareText}>
            share your referal link to get all kicked up
          </span>

          <div className={styles.ref}>
            <div className={styles.shareLink}>
              <div className={styles.link}>
                <span>https://paraplug.store?ref=123</span>
                <button>
                  <DocumentDuplicateIcon />
                  copy link
                </button>
              </div>
            </div>
            <div className={styles.socialRow}>
              <div className={styles.socialBox}>
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div className={styles.socialBox}>
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div className={styles.socialBox}>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refferal;
