"use client";
import { useEffect, useState } from "react";
import { publicRequest } from "../requests";
import styles from "../src/styles/admin.module.css";
import Moment from "react-moment";

const MainAdmin = () => {
  const [emails, setEmails] = useState([]);
  const [messages, setMessages] = useState([]);
  const getSubscribers = async () => {
    try {
      const res = await publicRequest.get("/email");
      setEmails(res.data.allEmail);
    } catch (error) {
      console.log(error);
    }
  };
  const getMessages = async () => {
    try {
      const res = await publicRequest.get("/customer");
      setMessages(res.data.allCustomer);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSubscribers();
    getMessages();
  }, []);
  return (
    <div className="container">
      <div className={styles.adminbody}>
        <div className={styles.emailsuscribers}>
          <h4>Email Subscribers</h4>
          {emails.map((email) => (
            <p key={email._id}>{email.email}</p>
          ))}
        </div>
        <div className={styles.contact}>
          <h4>messages sent from users</h4>
          {messages.map((message) => (
            <div className={styles.messagebody} key={message._id}>
              <div className={styles.contacttop}>
                <p>{message.name}</p>
                <p>{message.subject}</p>
                <p>
                  <Moment date={message?.createdAt} format="DD MMMM yyyy" />
                </p>
              </div>
              <p className={styles.message}>{message.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainAdmin;
