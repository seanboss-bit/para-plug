"use client";
import Link from "next/link";
import styles from "../../../styles/order.module.css";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { useParams, useRouter } from "next/navigation";
import { publicRequest } from "../../../../requests";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loading from "../../../../components/Loading";

const page = () => {
  const id = useParams();
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const getOrder = async () => {
    setLoading(true);
    try {
      const res = await publicRequest.get(`/order/find/${id.id}`);
      setOrder(res.data.product);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateOrder = async () => {
    setLoading(true);
    try {
      const res = await publicRequest.put(`/order/${id.id}`, {
        completed: true,
      });
      toast.success(res.data.message);
      router.push("/orders");
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteOrder = async () => {
    setLoading(true);
    try {
      const res = await publicRequest.delete(`/order/${id.id}`);
      toast.success(res.data.message);
      router.push("/orders");
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrder();
  }, [id?.id]);
  return (
    <div>
      <div className="container">
        {loading ? (
          <Loading loading={loading} />
        ) : (
          <div className={styles.top}>
            <Link href={"/orders"}>
              {" "}
              <ArrowUturnLeftIcon />
            </Link>
            <div>
              <button onClick={() => updateOrder()}>completed</button>
              <button onClick={() => deleteOrder()}>delete</button>
            </div>
          </div>
        )}
        <div className={styles.middle}>
          <h4>customer {order?.name}</h4>
          <h4>email: {order?.email}</h4>
          <h4>phone: {order?.phone}</h4>
          <h4>address: {order?.address}</h4>
        </div>
        <div className="bottom">
          <div className={styles.titles}>
            <h3 className={styles.productitile}>product</h3>
            <h3 className="price">price</h3>
            <h3 className="quantity">quantity</h3>
            <h3 className={styles.total}>total</h3>
          </div>
          {order?.orders?.map((item, i) => (
            <div className={styles?.cartItem} key={i}>
              <div className={styles?.cartproduct}>
                <img src={item?.image} alt="#" />
                <div>
                  <h3>{item?.name}</h3>
                  <p>{item?.category}</p>
                  <p>size : {item?.size}</p>
                </div>
              </div>
              <div className={styles.cartprice}>
                NGN {numberWithCommas(item?.price)}
              </div>
              <div className={styles.res}>
                <div className={styles.cartquantity}>
                  <div className="count">{item?.cartQuantity}</div>
                </div>
              </div>
              <div className={styles.carttotal}>
                NGN {numberWithCommas(item?.price * item?.cartQuantity)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
