import { ClipLoader } from "react-spinners";
import styles from "../src/styles/Loading.module.css";

const Loading = ({ loading }) => {
  return (
    <div className={styles.main}>
      <ClipLoader
        loading={loading}
        color="#0084d6"
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
