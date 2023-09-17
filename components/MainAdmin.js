"use client";
import { useEffect, useState } from "react";
import { publicRequest } from "../requests";
import styles from "../src/styles/admin.module.css";

const MainAdmin = () => {
  const [emails, setEmails] = useState([]);
  const getSubscribers = async () => {
    try {
      const res = await publicRequest.get("/email");
      console.log(res);
      setEmails(res.data.allEmail);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSubscribers();
  }, []);
  return (
    <div className="container">
      <div className={styles.adminbody}>
        <div className={styles.emailsuscribers}>
          <h4>Email Subscribers</h4>
          {emails.map((email) => (
            <p key={email.id}>{email.email}</p>
          ))}
        </div>
        <div className={styles.contact}>
          <h4>messages sent from users</h4>
          <div className={styles.messagebody}>
            <div className={styles.contacttop}>
              <p>john doe</p>
              <p>review on paraplug website</p>
              <p>june 3 2020</p>
            </div>
            <p className={styles.message}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              esse autem quidem mollitia voluptatibus obcaecati ratione! Cumque
              quam amet nemo at quod velit quaerat sapiente recusandae!
              Perferendis, amet! Excepturi tempore dolorem ipsum. Hic,
              voluptatum vitae, quibusdam modi vero cum recusandae maxime optio
              pariatur ipsam qui voluptatibus! Iste exercitationem voluptatibus
              alias porro ratione minima quidem? Molestias in aut velit illo vel
              inventore ea, eaque excepturi officia vero? Nobis assumenda
              pariatur officiis nihil suscipit magnam tempore doloribus
              temporibus aspernatur dolores excepturi harum autem maiores,
              commodi in aut voluptate! Pariatur fugit explicabo nobis.
            </p>
          </div>
          <div className={styles.messagebody}>
            <div className={styles.contacttop}>
              <p>john doe</p>
              <p>review on paraplug website</p>
              <p>june 3 2020</p>
            </div>
            <p className={styles.message}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              esse autem quidem mollitia voluptatibus obcaecati ratione! Cumque
              quam amet nemo at quod velit quaerat sapiente recusandae!
              Perferendis, amet! Excepturi tempore dolorem ipsum. Hic,
              voluptatum vitae, quibusdam modi vero cum recusandae maxime optio
              pariatur ipsam qui voluptatibus! Iste exercitationem voluptatibus
              alias porro ratione minima quidem? Molestias in aut velit illo vel
              inventore ea, eaque excepturi officia vero? Nobis assumenda
              pariatur officiis nihil suscipit magnam tempore doloribus
              temporibus aspernatur dolores excepturi harum autem maiores,
              commodi in aut voluptate! Pariatur fugit explicabo nobis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainAdmin;
