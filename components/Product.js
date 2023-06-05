"use client";
import Image from "next/image";
import styles from "../src/styles/product.module.css";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addProduct } from "@/redux/features/cartReducer";
import { publicRequest } from "../requests";
import Loading from "./Loading";

const Product = () => {
  const [loading, setLoading] = useState(false);
  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const id = useParams();
  const dispatch = useDispatch();
  const [singleItem, setSingleItem] = useState();
  const [size, setSize] = useState("size");

  const getItem = async () => {
    setLoading(true);
    try {
      const res = await publicRequest.get(`/product/find/${id.id}`);
      setSingleItem(res.data.product);
      if (res.data) {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getItem();
  }, [id.id]);

  const [bigimg, setBigImg] = useState(singleItem?.extraImg[0]);

  const activePic = (i) => {
    setBigImg(singleItem?.extraImg[i]);
  };

  const add = (product) => {
    if (size === "size") {
      toast.error("Please Select Your Kicks Size");
    } else {
      dispatch(addProduct({ ...product, size }));
    }
  };
  return (
    <div className={styles.productmain}>
      <div className="container">
        {loading ? (
          <Loading loading={loading} />
        ) : (
          <div className={styles.product}>
            <div className={styles.productimages}>
              <img
                src={bigimg === undefined ? singleItem?.image : bigimg}
                alt="#"
                className={styles.mainimg}
              />
              <div className={styles.subimages}>
                {singleItem?.extraImg.map((img, i) => (
                  <Image
                    key={i}
                    width={100}
                    height={100}
                    src={img}
                    alt="#"
                    objectFit="contain"
                    onClick={() => activePic(i)}
                    className={
                      singleItem?.extraImg[i] === bigimg ? styles.active : null
                    }
                  />
                ))}
              </div>
            </div>
            <div className={styles.info}>
              <div>
                <span className={styles.location}>
                  home / {singleItem?.category} / {singleItem?.name}
                </span>
                <p className={styles.cat}>{singleItem?.category}</p>
                <h3 className={styles.infoname}>{singleItem?.name}</h3>
                <p className={styles.pl}>
                  {singleItem?.slashPrice ? (
                    <span>NGN {numberWithCommas(singleItem?.slashPrice)}</span>
                  ) : null}
                  <p>NGN {numberWithCommas(singleItem?.price)}</p>
                  {singleItem?.freeShipping ? (
                    <span>+ free shipping</span>
                  ) : null}
                </p>
                <p className={styles.desc}>{singleItem?.description}</p>
              </div>
              <div>
                <div className={styles.options}>
                  {/* <input type="number" placeholder={1} defaultValue={1} /> */}
                  <select onChange={(e) => setSize(e.target.value)}>
                    <option value={"size"}>size</option>
                    {singleItem?.sizes.map((size, i) => (
                      <option key={i} value={size}>
                        {" "}
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
                <button className={styles.btn} onClick={() => add(singleItem)}>
                  add to cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
