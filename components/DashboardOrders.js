"use client";
import { useState } from "react";
import styles from "../src/styles/dashboard.module.css";
import { XMarkIcon } from "@heroicons/react/24/outline";

const DashboardOrders = () => {
  const [showDetails, setShowDetails] = useState(false);
  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div className={styles.orderMain}>
      <div className="container">
        <div>
          <div className={styles.orderHeading}>
            <h2>all orders</h2>
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
                  <button onClick={() => setShowDetails(true)}>
                    view details
                  </button>
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
                  <button onClick={() => setShowDetails(true)}>
                    view details
                  </button>
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
      {showDetails && (
        <div className={styles.detbg}>
          <div className={styles.detbody}>
            <div className={styles.cl}>
              <XMarkIcon onClick={() => setShowDetails(false)} />
            </div>
            <div>
              <div className={styles.titles}>
                <h3 className={styles.productitile}>product</h3>
                <h3 className="price">price</h3>
                <h3 className="quantity">quantity</h3>
                <h3 className={styles.total}>total</h3>
              </div>
              <div className={styles?.cartItem}>
                <div className={styles?.cartproduct}>
                  <img
                    src={
                      "https://res.cloudinary.com/dvo4tlcrx/image/upload/v1697713286/r2lm9mkmxdl1egw2dwcx.png"
                    }
                    alt="#"
                  />
                  <div>
                    <h3>shoe</h3>
                    <p>jordan</p>
                    <p>size : 43</p>
                  </div>
                </div>
                <div className={styles.cartprice}>
                  NGN {numberWithCommas(4000)}
                </div>
                <div className={styles.res}>
                  <div className={styles.cartquantity}>
                    <div className="count">4</div>
                  </div>
                </div>
                <div className={styles.carttotal}>
                  NGN {numberWithCommas(9000)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardOrders;
