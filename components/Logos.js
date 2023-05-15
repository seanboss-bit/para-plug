import styles from "../src/styles/logo.module.css";

const Logos = () => {
  return (
    <div>
      <div className="container">
        <div className={styles.inner}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png"
            alt="#"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png"
            alt="#"
          />
        </div>
      </div>
    </div>
  );
};

export default Logos;
