import styles from "../src/styles/about.module.css";

const AboutBody = () => {
  return (
    <div className={styles.mainbody}>
      <div className="container">
        <h1>about us</h1>
        <div className={styles.who}>
          <div className={styles.textside}>
            <h2>who we are?</h2>
            <p>
              Welcome to Paraplug, your one-stop-shop for the latest and
              greatest branded Nike and Jordan Sneakers. At Paraplug, we believe
              that a great pair of sneakers can take you anywhere, from the
              court to the street, and we are passionate about bringing you the
              best sneakers from these iconic brands.
            </p>
          </div>
          <img
            src="https://paraplug.org/wp-content/uploads/2023/02/revolt-j7zu2kpTnwY-unsplash-1536x1024.jpg"
            alt="#"
          />
        </div>
        {/* <div className={styles.management}>
          <h2>our management</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic,
            quaerat quo voluptatum quod ea earum!
          </p>
          <div className={styles.staff}>
            <div className={styles.staffbox}>
              <img
                src="https://paraplug.org/wp-content/uploads/2018/12/team4free-img.png"
                alt="#"
              />
              <h6>name</h6>
              <span>position</span>
            </div>
            <div className={styles.staffbox}>
              <img
                src="https://paraplug.org/wp-content/uploads/2018/12/team4free-img.png"
                alt="#"
              />
              <h6>name</h6>
              <span>position</span>
            </div>
            <div className={styles.staffbox}>
              <img
                src="https://paraplug.org/wp-content/uploads/2018/12/team4free-img.png"
                alt="#"
              />
              <h6>name</h6>
              <span>position</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutBody;
