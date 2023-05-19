import styles from "../src/styles/store.module.css";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Result from "./Result";

const StoreBody = ({ products }) => {
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
          {products.map((product) => (
            <Result
              img={product.img}
              name={product.name}
              cat={product.category}
              price={product.price}
              slash={product.slashPrice}
              id={product.id}
              key={product.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreBody;
