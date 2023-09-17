"use client";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import styles from "../src/styles/newsletter.module.css";
import { toast } from "react-toastify";
import { useState } from "react";
import { publicRequest } from "../requests";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const post = async (e) => {
    e.preventDefault();
    if (email === "") {
      toast.error("Enter Your email Please");
    } else {
      const res = await publicRequest.post("/email", {
        email: email,
      });
      toast.success("Subscribed Sucessfully");
    }
  };
  return (
    <div className={styles.main}>
      <div className="container">
        <div className={styles.inner}>
          <h3>Join our community</h3>
          <span>
            get 10% off your first order on the website and be the first to get
            the latest updates on your promotion campaigns, products and
            services
          </span>
          <form className={styles.inputbox}>
            <input
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={(e) => post(e)}>
              <PaperAirplaneIcon />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
