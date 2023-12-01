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
            src="https://manofmany.com/wp-content/uploads/2022/03/Air-Jordan-1-OG-High-Chicago-Reimagined-feature-1200x900.jpg"
            alt="#"
          />
        </div>
        <div className={styles.who}>
          <img
            src="https://www.highsnobiety.com/static-assets/thumbor/24t3i4G37yNhlUSVkx0DUWRPYmA=/1200x720/www.highsnobiety.com/static-assets/wp-content/uploads/2021/01/15142643/valuable-jordan-sneakers-ebay-feat1.jpg"
            alt="#"
          />
          <div className={styles.textside}>
            <h2>Our Mission</h2>
            <p>
              Our mission to provide you with a seamless shopping experience and
              unparalleled customer service. We offer a wide selection of
              sneakers for men, women, and children, so no matter who you are or
              what your style is, you can find the perfect pair of sneakers at
              ParaPlug. From the latest releases to classic favorites, we've got
              you covered.
            </p>
          </div>
        </div>
        <div className={styles.who}>
          <div className={styles.textside}>
            <h2>High Quality Sneaker</h2>
            <p>
              We take great pride in the quality of our products, which are
              sourced directly from Nike and Jordan, so you can be sure that you
              are getting the real deal. We also offer competitive pricing and
              regular discounts and promotions to help you save money on your
              favorite sneakers.
            </p>
          </div>
          <img
            src="https://robbreport.com/wp-content/uploads/2022/10/RR_Best_Jordan_Sneakers_Lead.jpg?w=1000"
            alt="#"
          />
        </div>
        <div className={styles.who}>
          <img
            src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i4jPhKEFw1NE/v0/1200x-1.jpg"
            alt="#"
          />
          <div className={styles.textside}>
            <h2>Why should you shop? </h2>
            <p>
              We know that buying sneakers online can be a daunting experience,
              which is why we want to make it as easy and enjoyable as possible.
              Our website is designed with you in mind, featuring intuitive
              navigation, detailed product descriptions, and high-quality
              images, so you can shop with confidence.
            </p>
            <p>
              So what are you waiting for? Browse our selection of Nike and
              Jordan sneakers today and find your new favorite pair. If you have
              any questions or concerns, please do not hesitate to contact us.
              We look forward to serving you and helping you step up your
              sneaker game!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBody;
