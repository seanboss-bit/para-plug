"use client";
import { useParams, useRouter } from "next/navigation";
import { publicRequest } from "../requests";
import styles from "../src/styles/user.module.css";
import { useEffect, useState } from "react";
import Moment from "react-moment";
import Loading from "./Loading";
import { toast } from "react-toastify";

const UserSingle = () => {
  const id = useParams();
  const [details, setDetails] = useState({});
  const [orders, setOrders] = useState([]);
  const [refs, setRefs] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const getUser = async () => {
    try {
      const res = await publicRequest.get("user/find/details/" + id.id);
      const res2 = await publicRequest.get("/order/user/find/" + id.id);
      const res3 = await publicRequest.get(`/user/find/ref/${id.id}`);
      setLoading(false);
      setDetails(res.data.others);
      setOrders(res2.data.order);
      setRefs(res3.data.userRefs);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  const deleteUser = async () => {
    try {
      const res = await publicRequest.delete("/user/" + id.id);
      toast.success(res.data.message);
      router.push("/users");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.singleMain}>
      {loading && <Loading />}
      <div className="container">
        <div className={styles.toper}>
          <div className={styles.singleDetails}>
            <img src={details?.image} alt="user_img" />
            <div>
              <div className={styles.detbox}>
                <p>fullname:</p>
                <span>{details?.fullName}</span>
              </div>
              <div className={styles.detbox}>
                <p>username:</p>
                <span>{details?.username}</span>
              </div>
              <div className={styles.detbox}>
                <p>email:</p>
                <span>{details?.email}</span>
              </div>
              <div className={styles.detbox}>
                <p>number of orders:</p>
                <span>{orders?.length}</span>
              </div>
              <div className={styles.detbox}>
                <p>number of referrals:</p>
                <span>{refs?.length}</span>
              </div>
              <div className={styles.detbox}>
                <p>date joined:</p>
                <span>
                  <Moment date={details?.createdAt} format="DD MMMM yyyy" />
                </span>
              </div>
              <div className={styles.detbox}>
                <p>isVerified:</p>
                <span>{details?.isVerified ? "Yes" : "No"}</span>
              </div>
              <div className={styles.detbox}>
                <p>isAdmin:</p>
                <span>{details.isAdmin ? "Yes" : "No"}</span>
              </div>
            </div>
          </div>
          <div className={styles.sindel}>
            <button onClick={() => deleteUser()}>delete user</button>
          </div>
        </div>
        <div className={styles.bottomer}>
          <h2>Referral Status</h2>
          <div className={styles.reflist}>
            <div className={styles.refheading}>
              <h4>Name</h4>
              <h4>email</h4>
              <h4>shoes bought</h4>
            </div>
            <ol>
              {refs.length > 0
                ? refs.map((ref, i) => (
                    <li key={i}>
                      <div className={styles.listItems}>
                        <span>{ref?.fullName}</span>
                        <span>{ref?.email}</span>
                        <span>{}</span>
                      </div>
                    </li>
                  ))
                : "NO REFS YET"}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSingle;
