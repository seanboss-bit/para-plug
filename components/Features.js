import React from "react";
import styles from "../src/styles/features.module.css";

const Features = () => {
  return (
    <div>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.box}>
            <img
              src="https://paraplug.org/wp-content/uploads/2018/12/globe-free-img.png"
              alt="#"
            />
            <h4> world wide delivery</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              impedit, magni molestias illo consequuntur magnam natus maiores
              numquam placeat soluta!
            </p>
          </div>
          <div className={styles.box}>
            <img
              src="https://paraplug.org/wp-content/uploads/2018/12/quality-free-img.png"
              alt="#"
            />
            <h4> best quality</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              impedit, magni molestias illo consequuntur magnam natus maiores
              numquam placeat soluta!
            </p>
          </div>
          <div className={styles.box}>
            <img
              src="https://paraplug.org/wp-content/uploads/2018/12/tag-free-img.png"
              alt="#"
            />
            <h4> best offers</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              impedit, magni molestias illo consequuntur magnam natus maiores
              numquam placeat soluta!
            </p>
          </div>
          <div className={styles.box}>
            <img
              src="https://paraplug.org/wp-content/uploads/2018/12/lock-free-img.png"
              alt="#"
            />
            <h4>secure payments</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              impedit, magni molestias illo consequuntur magnam natus maiores
              numquam placeat soluta!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
