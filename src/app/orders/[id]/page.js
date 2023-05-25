"use client";
import Link from "next/link";
import styles from "../../../styles/order.module.css";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { useParams } from "next/navigation";
import { publicRequest } from "../../../../requests";
import { useEffect, useState } from "react";
export const metadata = {
  icons: {
    icon: "/para.png",
    shortcut: "/para.png",
    apple: "/para.png",
  },
};

const page = () => {
  const id = useParams();
  const [order, setOrder] = useState({});
  const getOrder = async () => {
    try {
      const res = await publicRequest.get("/order/find/" + id.id);
      setOrder(res.data.product);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrder();
  }, []);
  return (
    <div>
      <div className="container">
        <div className={styles.top}>
          <Link href={"/orders"}>
            {" "}
            <ArrowUturnLeftIcon />
          </Link>
          <div>
            <button>completed</button>
            <button>delete</button>
          </div>
        </div>
        <div className={styles.middle}>
          <h4>customer {order.name}</h4>
          <h4>email: {order.email}</h4>
          <h4>phone: {order.phone}</h4>
          <h4>address: {order.address}</h4>
        </div>
        <div className="bottom">
          <div className={styles.titles}>
            <h3 className={styles.productitile}>product</h3>
            <h3 className="price">price</h3>
            <h3 className="quantity">quantity</h3>
            <h3 className={styles.total}>total</h3>
          </div>
          {order.orders?.map((item, i) => (
            <div className={styles.cartItem} key={i}>
              <div className={styles.cartproduct}>
                <img src={item.image} alt="#" />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.category}</p>
                  <p>size : {item.size}</p>
                </div>
              </div>
              <div className={styles.cartprice}>NGN {item.price}</div>
              <div className={styles.res}>
                <div className={styles.cartquantity}>
                  <div className="count">{item.cartQuantity}</div>
                </div>
              </div>
              <div className={styles.carttotal}>
                NGN {item.price * item.cartQuantity}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
