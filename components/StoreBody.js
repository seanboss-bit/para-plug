import styles from "../src/styles/store.module.css";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Result from "./Result";

const StoreBody = () => {
  return (
    <div className={styles.store}>
      <div className={styles.filters}>
        <div className="container">
          <div className={styles.filterInner}>
            <div className={styles.filtersearch}>
              <input type="text" placeholder="Search Here...." />
              <button>
                <MagnifyingGlassIcon />
              </button>
            </div>
            <div className={styles.cat}>
              <select>
                <option>newest</option>
                <option>price (asc)</option>
                <option>price (desc)</option>
              </select>
            </div>
            <div className={styles.shoe}>
              <select>
                <option>all</option>
                <option>jordans</option>
                <option>nikes</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.results}>
          <Result
            img="https://paraplug.org/wp-content/uploads/2017/12/AIR-JORDAN-3-RETRO-FIRE-RED-2022-2-300x300.jpg"
            name="name of shoe"
            cat={"catergory"}
            price="199.99"
            slash={"399.99"}
          />
          <Result
            img="https://paraplug.org/wp-content/uploads/2017/12/AIR-JORDAN-3-RETRO-FIRE-RED-2022-2-300x300.jpg"
            name="name of shoe"
            cat={"catergory"}
            price="199.99"
            slash={"399.99"}
          />
          <Result
            img="https://paraplug.org/wp-content/uploads/2017/12/AIR-JORDAN-3-RETRO-FIRE-RED-2022-2-300x300.jpg"
            name="name of shoe"
            cat={"catergory"}
            price="199.99"
            slash={"399.99"}
          />
          <Result
            img="https://paraplug.org/wp-content/uploads/2017/12/AIR-JORDAN-3-RETRO-FIRE-RED-2022-2-300x300.jpg"
            name="name of shoe"
            cat={"catergory"}
            price="199.99"
            slash={"399.99"}
          />
          <Result
            img="https://paraplug.org/wp-content/uploads/2017/12/AIR-JORDAN-3-RETRO-FIRE-RED-2022-2-300x300.jpg"
            name="name of shoe"
            cat={"catergory"}
            price="199.99"
            slash={"399.99"}
          />
          <Result
            img="https://paraplug.org/wp-content/uploads/2017/12/AIR-JORDAN-3-RETRO-FIRE-RED-2022-2-300x300.jpg"
            name="name of shoe"
            cat={"catergory"}
            price="199.99"
            slash={"399.99"}
          />
          <Result
            img="https://paraplug.org/wp-content/uploads/2017/12/AIR-JORDAN-3-RETRO-FIRE-RED-2022-2-300x300.jpg"
            name="name of shoe"
            cat={"catergory"}
            price="199.99"
            slash={"399.99"}
          />
        </div>
      </div>
    </div>
  );
};

export default StoreBody;
