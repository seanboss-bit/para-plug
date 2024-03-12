"use client";
import styles from "../src/styles/store.module.css";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Result from "./Result";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { publicRequest } from "../requests";
import { addShoe } from "@/redux/features/shoeReducer";
import { motion } from "framer-motion";
import Loading from "./Loading";

const StoreBody = () => {
  const [loading, setLoading] = useState(false);
  const shoes = useSelector((state) => state.shoe.shoes);
  const [showShoe, setShowShoe] = useState([]);
  const [skip, setSkip] = useState(0);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState("all");
  const [latest, setLatest] = useState("newest");

  const getAllShoes = async () => {
    setLoading(true);
    try {
      const res = await publicRequest.get(`/product?skip=${skip}`);
      setShowShoe([...showShoe, ...res.data.allKicks]);
      if (res.data) {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getAllShoes2 = async () => {
    setLoading(true);
    try {
      const res = await publicRequest.get("/product/admin/kicks");
      dispatch(addShoe(res.data.allKicks));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllShoes();
  }, [skip]);

  useEffect(() => {
    getAllShoes2();
  }, []);

  useEffect(() => {
    if (category === "all") {
      getAllShoes();
    } else if (category === "nikes") {
      setShowShoe(shoes.filter((item) => item.category === "nike"));
    } else {
      setShowShoe(shoes.filter((item) => item.category === "jordan"));
    }
  }, [category]);

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
  }, [latest]);

  const search = () => {
    setShowShoe(
      shoes.filter((item) => {
        if (searchValue === "") {
          return item;
        } else if (
          item.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
        ) {
          return item;
        }
      })
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 2 >=
        document.documentElement.scrollHeight
      ) {
        if (searchValue === "") {
          setTimeout(() => {
            setSkip((prev) => prev + 12);
          }, 500);
        }
      }
    });
  }, []);

  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };
  const item = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: { ease: "easeIn", duration: 0.9 },
    },
  };

  return (
    <div className={styles.store}>
      {/* <div className={styles.vidcontainer}>
        <video src="/banner.mp4" autoPlay loop controls={false} muted />
      </div> */}
      <div className={styles.filters}>
        <div className="container">
          <div className={styles.filterInner}>
            <div className={styles.filtersearch}>
              <input
                type="text"
                placeholder="Search Here...."
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
              />
              <button onClick={() => search()}>
                <MagnifyingGlassIcon />
              </button>
            </div>
            <div className={styles.cat}>
              <select onChange={(e) => setLatest(e.target.value)}>
                <option value={"newest"}>Filter</option>
                <option value={"newest"}>Newest</option>
                <option value={"asc"}>Price (Low to high)</option>
                <option value={"desc"}>Price (High to low)</option>
              </select>
            </div>
            <div className={styles.shoe}>
              <select onChange={(e) => setCategory(e.target.value)}>
                <option value={"all"}>All</option>
                <option value={"jordans"}>Air Jordan</option>
                <option value={"nikes"}>Nike</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {loading && <Loading />}

        <motion.div
          className={styles.results}
          initial="hidden"
          animate="show"
          variants={container}
        >
          {showShoe.map((product) => (
            <Result
              img={product?.image}
              name={product?.name}
              cat={product?.category}
              price={product?.price}
              slash={product?.slashPrice}
              id={product?._id}
              key={product?._id}
              stock={product?.inStock}
              dateAdded={product?.createdAt}
              item={item}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default StoreBody;
