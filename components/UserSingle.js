import styles from "../src/styles/user.module.css";

const UserSingle = () => {
  return (
    <div className={styles.singleMain}>
      <div className="container">
        <div className={styles.toper}>
          <div className={styles.singleDetails}>
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
              alt="user_img"
            />
            <div>
              <div className={styles.detbox}>
                <p>fullname:</p>
                <span>abubakar musa</span>
              </div>
              <div className={styles.detbox}>
                <p>username:</p>
                <span>abubakar musa</span>
              </div>
              <div className={styles.detbox}>
                <p>email:</p>
                <span>abubakar musa</span>
              </div>
              <div className={styles.detbox}>
                <p>number of orders:</p>
                <span>abubakar musa</span>
              </div>
              <div className={styles.detbox}>
                <p>number of referrals:</p>
                <span>abubakar musa</span>
              </div>
              <div className={styles.detbox}>
                <p>date joined:</p>
                <span>abubakar musa</span>
              </div>
              <div className={styles.detbox}>
                <p>isVerified:</p>
                <span>abubakar musa</span>
              </div>
              <div className={styles.detbox}>
                <p>isAdmin:</p>
                <span>abubakar musa</span>
              </div>
            </div>
          </div>
          <div className={styles.sindel}>
            <button>delete user</button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default UserSingle;
