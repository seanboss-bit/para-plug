import styles from "../src/styles/dashboard.module.css";

const DashboardOrders = () => {
  return (
    <div className={styles.orderMain}>
      <div className="container">
        <div>
          <div className={styles.orderHeading}>
            <h2>recent orders</h2>
            <a href="#">view all</a>
          </div>
          <div className={styles.orderrow}>
            <div className={styles.orderbox}>
              <img
                src="https://res.cloudinary.com/dvo4tlcrx/image/upload/v1697713286/r2lm9mkmxdl1egw2dwcx.png"
                alt="shoe_img"
              />
              <div>
                <p className={styles.orderid}>order id: #1039485764</p>
                <p className={styles.complete}>
                  {" "}
                  <span></span> completed
                </p>
                <span className={styles.price}>NGN 1,000</span>
                <div className={styles.sum}>
                  <p>4th August 2023</p>
                  <button>view details</button>
                </div>
              </div>
            </div>
            <div className={styles.orderbox}>
              <img
                src="https://res.cloudinary.com/dvo4tlcrx/image/upload/v1697713286/r2lm9mkmxdl1egw2dwcx.png"
                alt="shoe_img"
              />
              <div>
                <p className={styles.orderid}>order id: #1039485764</p>
                <p className={styles.complete}>
                  {" "}
                  <span></span> completed
                </p>
                <span className={styles.price}>NGN 1,000</span>
                <div className={styles.sum}>
                  <p>4th August 2023</p>
                  <button>view details</button>
                </div>
              </div>
            </div>
            <div className={styles.orderbox}>
              <img
                src="https://res.cloudinary.com/dvo4tlcrx/image/upload/v1697713286/r2lm9mkmxdl1egw2dwcx.png"
                alt="shoe_img"
              />
              <div>
                <p className={styles.orderid}>order id: #1039485764</p>
                <p className={styles.complete}>
                  {" "}
                  <span></span> completed
                </p>
                <span className={styles.price}>NGN 1,000</span>
                <div className={styles.sum}>
                  <p>4th August 2023</p>
                  <button>view details</button>
                </div>
              </div>
            </div>
            <div className={styles.orderbox}>
              <img
                src="https://res.cloudinary.com/dvo4tlcrx/image/upload/v1697713286/r2lm9mkmxdl1egw2dwcx.png"
                alt="shoe_img"
              />
              <div>
                <p className={styles.orderid}>order id: #1039485764</p>
                <p className={styles.complete}>
                  {" "}
                  <span></span> completed
                </p>
                <span className={styles.price}>NGN 1,000</span>
                <div className={styles.sum}>
                  <p>4th August 2023</p>
                  <button>view details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOrders;
