"use client";
import { useState } from "react";
import styles from "../src/styles/contact.module.css";
import { toast } from "react-toastify";
import { publicRequest } from "../requests";
import { motion } from "framer-motion";

const ContactBody = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (name === "" || subject === "" || email === "" || message === "") {
      toast.error("All Spaces Should Be Filled");
    } else {
      try {
        const res = await publicRequest.post("/customer", {
          name,
          email,
          subject,
          message,
        });
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };
  const item = {
    hidden: {
      y: 200,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: { ease: "easeIn", duration: 0.9 },
    },
  };
  return (
    <div>
      <div className="container">
        <h1 className={styles.heading}>customer care</h1>
        <div className={styles.gb}>
          <div>
            <img
              src="https://media4.giphy.com/media/dXQySomSteGzajNFmD/giphy.gif?cid=6c09b952e2858279ed861eac4aeb83f6727458f8be9fc5e9&ep=v1_internal_gifs_gifId&rid=giphy.gif&ct=g"
              alt="#"
            />
          </div>
          <div>
            <motion.form initial="hidden" animate="show" variants={container}>
              <motion.div className={styles.inputBox} variants={item}>
                <input
                  type="text"
                  placeholder="Enter Fullname"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label>Fullname</label>
              </motion.div>
              <motion.div variants={item} className={styles.inputBox}>
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>email</label>
              </motion.div>
              <motion.div variants={item} className={styles.inputBox}>
                <input
                  type="text"
                  placeholder="Enter Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <label>subject</label>
              </motion.div>
              <motion.div variants={item} className={styles.inputBox}>
                <textarea
                  cols="5"
                  rows="5"
                  placeholder="Enter Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <label>message</label>
              </motion.div>
              <button className={styles.btn} onClick={(e) => sendMessage(e)}>
                send message
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBody;
