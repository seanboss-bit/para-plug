import styles from "../src/styles/category.module.css";

const Category = () => {
  return (
    <div>
      <div className="container">
        <div className={styles.allslides}>
          <div className={styles.firstslide}>
            <div className={styles.content}>
              <h3>20% off on Air Jordan</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
                omnis fugiat voluptatem molestiae laudantium repellendus!
              </p>
              <a href="/shop">shop now</a>
            </div>
          </div>
          <div className={styles.secondslide}>
            <div className={styles.content}>
              <h3>latest nike footwear for you</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
                omnis fugiat voluptatem molestiae laudantium repellendus!
              </p>
              <a href="/shop">shop now</a>
            </div>
          </div>
          <div className={styles.thirdslide}>
            <div className={styles.content}>
              <h3>let's customize your snakers!</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
                omnis fugiat voluptatem molestiae laudantium repellendus!
              </p>
              <a href="/shop">checkout</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
