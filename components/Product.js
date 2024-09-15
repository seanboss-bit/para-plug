"use client";
import Image from "next/image";
import styles from "../src/styles/product.module.css";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addProduct } from "@/redux/features/cartReducer";
import { publicRequest } from "../requests";
import Loading from "./Loading";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Product = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const id = useParams();
  const dispatch = useDispatch();
  const [singleItem, setSingleItem] = useState();
  const [size, setSize] = useState("size");
  const user = useSelector((state) => state.user.user);

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
          <>
            <Link href={"/store"} className={styles.back}>
              <ArrowUturnLeftIcon />
              <span>back</span>
            </Link>
            <div className={styles.product}>
              <div className={styles.productimages}>
                <img
                  src={bigimg === undefined ? singleItem?.image : bigimg}
                  alt="main_image"
                  className={styles.mainimg}
                />
                <div className={styles.subimages}>
                  {singleItem?.extraImg.map((img, i) => (
                    <Image
                      key={i}
                      width={100}
                      height={100}
                      src={img}
                      alt="shoe_image"
                      onClick={() => activePic(i)}
                      className={
                        singleItem?.extraImg[i] === bigimg
                          ? styles.active
                          : null
                      }
                    />
                  ))}
                </div>
              </div>
              <div className={styles.info}>
                <div>
                  <span className={styles.location}>
                    store / {singleItem?.category} / {singleItem?.name}
                  </span>
                  <p className={styles.cat}>{singleItem?.category}</p>
                  <h3 className={styles.infoname}>{singleItem?.name}</h3>
                  <div className={styles.pl}>
                    {singleItem?.slashPrice ? (
                      <span>
                        NGN {numberWithCommas(singleItem?.slashPrice)}
                      </span>
                    ) : null}
                    <p className={styles.co}>NGN {numberWithCommas(singleItem?.price)}</p>
                    {singleItem?.freeShipping ? (
                      <span>+ free shipping</span>
                    ) : null}
                  </div>
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
                  {user ? (
                    <>
                      {" "}
                      {singleItem?.inStock ? (
                        <button
                          className={styles.btn}
                          onClick={() => add(singleItem)}
                        >
                          add to cart
                        </button>
                      ) : (
                        <div className={styles.out}>out of stock</div>
                      )}
                    </>
                  ) : (
                    <p
                      style={{
                        margin: "30px 0px",
                        fontSize: "20px",
                        textAlign: "center",
                        cursor: "pointer",
                        background: "#000",
                        color: "#fff",
                        padding: "10px",
                      }}
                      onClick={() => {
                        router.push("/login");
                      }}
                    >
                      Please Login To Buy A Kick
                    </p>
                  )}
                  {singleItem?.stockX && (
                    <a
                      href={singleItem?.stockX}
                      className={styles.stockX}
                      target="_blank"
                    >
                      Check on StockX
                    </a>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Product;
