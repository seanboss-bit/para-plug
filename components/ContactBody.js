import styles from "../src/styles/contact.module.css";

const ContactBody = () => {
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
            <form>
              <div className={styles.inputBox}>
                <input type="text" placeholder="Enter Fullname" />
                <label>Fullname</label>
              </div>
              <div className={styles.inputBox}>
                <input type="email" placeholder="Enter Email" />
                <label>email</label>
              </div>
              <div className={styles.inputBox}>
                <input type="text" placeholder="Enter Subject" />
                <label>subject</label>
              </div>
              <div className={styles.inputBox}>
                <textarea
                  cols="5"
                  rows="5"
                  placeholder="Enter Message"
                ></textarea>
                <label>message</label>
              </div>
              <button className={styles.btn}>send message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBody;
