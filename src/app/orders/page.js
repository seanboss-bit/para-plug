"use client";
import Link from "next/link";
import styles from "../../styles/order.module.css";
import { useEffect, useState } from "react";
import { publicRequest } from "../../../requests";
import Loading from "../../../components/Loading";

const page = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const getOrders = async () => {
    setLoading(true);
    try {
      const res = await publicRequest.get("/order");
      setAllOrders(
        res.data.allOrders.sort((a, b) => a.createdAt - b.createdAt)
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);
  return (
    <div className={styles.allOrders}>
      <div className="container">
        <h2>all orders</h2>
        {loading ? (
          <Loading />
        ) : (
          <div className={styles.orderbody}>
            {allOrders.map((order) => (
              <Link
                href={`/orders/${order?._id}`}
                key={order?._id}
                className={styles.order}
              >
                <div className={styles.name}>
                  <p>new order from {order?.name}</p>
                  <span>on {order?.createdAt}</span>
                </div>
                <div className={styles.orderend}>
                  {order?.completed ? null : <div className={styles.dot}></div>}
                  {order?.completed ? (
                    <p>order completed</p>
                  ) : (
                    <p>order not completed</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
