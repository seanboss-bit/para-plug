"use client";
import styles from "../src/styles/store.module.css";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Result from "./Result";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { searchShoe } from "@/redux/features/shoeReducer";

const StoreBody = ({ products }) => {
  const shoes = useSelector((state) => state.shoe.shoes);

  const [showShoe, setShowShoe] = useState(shoes);

  const [category, setCategory] = useState("all");

  const [latest, setLatest] = useState("newest");

  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (category === "all") {
      setShowShoe(shoes);
    } else if (category === "nikes") {
      setShowShoe(shoes.filter((item) => item.category === "nike"));
    } else {
      setShowShoe(shoes.filter((item) => item.category === "jordan"));
    }
  }, [category, searchValue]);

  useEffect(() => {
    if (latest === "newest") {
      setShowShoe((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (latest === "asc") {
      setShowShoe((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setShowShoe((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [latest, searchValue]);

  return (
    <div className={styles.store}>
      <div className={styles.filters}>
        <div className="container">
          <div className={styles.filterInner}>
            <div className={styles.filtersearch}>
              <input
                type="text"
                placeholder="Search Here...."
                onChange={(e) => setSearchValue(e.target.value)}
              />
              {/* <button onClick={() => dispatch(searchShoe(searchValue))}>
                <MagnifyingGlassIcon />
              </button> */}
              <button>
                <MagnifyingGlassIcon />
              </button>
            </div>
            <div className={styles.cat}>
              <select onChange={(e) => setLatest(e.target.value)}>
                <option value={"newest"}>newest</option>
                <option value={"asc"}>price (asc)</option>
                <option value={"desc"}>price (desc)</option>
              </select>
            </div>
            <div className={styles.shoe}>
              <select onChange={(e) => setCategory(e.target.value)}>
                <option value={"all"}>all</option>
                <option value={"jordans"}>jordans</option>
                <option value={"nikes"}>nikes</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.results}>
          {showShoe.map((product) => (
            <Result
              img={product.image}
              name={product.name}
              cat={product.category}
              price={product.price}
              slash={product.slashPrice}
              id={product._id}
              key={product._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreBody;
