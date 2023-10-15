import styles from "../src/styles/Loading.module.css";
const Loader = () => {
  return (
    <div className={styles.loader}>
      <video src="/para.mp4" autoPlay loop controls={false} />
    </div>
  );
};

export default Loader;
