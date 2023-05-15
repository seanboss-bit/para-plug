import React from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import styles from "../src/styles/recomended.module.css";
import RecCard from "./RecCard";

const Recomended = () => {
  return (
    <div>
      <div className="container">
        <h3 className={styles.heading}>
          Recommended For You <QuestionMarkCircleIcon />
        </h3>
        <div className={styles.recommend}>
          <RecCard />
          <RecCard />
          <RecCard />
          <RecCard />
          <RecCard />
          <RecCard />
        </div>
      </div>
    </div>
  );
};

export default Recomended;
