"use client";
import { useEffect, useState } from "react";
import styles from "../src/styles/dashboard.module.css";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { publicRequest } from "../requests";
import { useSelector } from "react-redux";
import Moment from "react-moment";

const DashboardOrders = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [details, setDetails] = useState([]);
  const user = useSelector((state) => state.user.user);
  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const getOrder = async () => {
    setLoading(true);
    try {
      const res = await publicRequest.get(`/order/user/find/${user._id}`);
      setLoading(false);
      setOrders(res.data.order);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrder();
  }, []);
  return (
    <div className={styles.orderMain}>
      <div className="container">
        <div>
          <div className={styles.orderHeading}>
            <h2>all orders</h2>
          </div>
          <div className={styles.orderrow}>
            {orders.length > 0 ? (
              <>
                {orders.map((order) => (
                  <div className={styles.orderbox} key={order?._id}>
                    <img src={order.orders[0].image} alt="shoe_img" />
                    <div>
                      <p className={styles.orderid}>
                        order id: #{order._id.slice(0, 7)}
                      </p>
                      {order.completed ? (
                        <p className={styles.complete}>
                          {" "}
                          <span></span> completed
                        </p>
                      ) : (
                        <p className={styles.incomplete}>
                          {" "}
                          <span></span> in transit
                        </p>
                      )}
                      <span className={styles.price}>
                        NGN {numberWithCommas(order.total)}
                      </span>
                      <div className={styles.sum}>
                        <p>
                          {" "}
                          <Moment
                            date={order?.createdAt}
                            format="DD MMMM yyyy"
                          />
                        </p>
                        <button
                          onClick={() => {
                            setShowDetails(true);
                            setDetails(order.orders);
                          }}
                        >
                          view details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              "You Have Not Made Any Orders Yet"
            )}
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
              {details.map((detail) => (
                <div className={styles?.cartItem}>
                  <div className={styles?.cartproduct}>
                    <img src={detail.image} alt="#" />
                    <div>
                      <h3>{detail.name}</h3>
                      <p>{detail.category}</p>
                      <p>size : {detail.size}</p>
                    </div>
                  </div>
                  <div className={styles.cartprice}>
                    NGN {numberWithCommas(detail.price)}
                  </div>
                  <div className={styles.res}>
                    <div className={styles.cartquantity}>
                      <div className="count">{detail.cartQuantity}</div>
                    </div>
                  </div>
                  <div className={styles.carttotal}>
                    NGN {numberWithCommas(detail.price * detail.cartQuantity)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardOrders;
