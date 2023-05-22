"use client";
import Image from "next/image";
import styles from "../src/styles/product.module.css";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { products } from "../data";
import { useDispatch } from "react-redux";
import { addProduct } from "../src/redux/features/cartReducer";

const Product = () => {
  const id = useParams();
  const dispatch = useDispatch();
  let item = products?.find((one) => {
    if (Number(id.id) === one.id) {
      return one;
    }
  });

  const [bigimg, setBigImg] = useState(item.img);

  const activePic = (i) => {
    setBigImg(item.extraImg[i]);
  };

  const add = (product) => {
    dispatch(addProduct(product));
  };

  return (
    <div className={styles.productmain}>
      <div className="container">
        <div className={styles.product}>
          <div className={styles.productimages}>
            <img src={bigimg} alt="#" className={styles.mainimg} />
            <div className={styles.subimages}>
              {item.extraImg.map((img, i) => (
                <Image
                  key={i}
                  width={100}
                  height={100}
                  src={img}
                  alt="#"
                  objectFit="contain"
                  onClick={() => activePic(i)}
                  className={item.extraImg[i] === bigimg ? styles.active : null}
                />
              ))}
            </div>
          </div>
          <div className={styles.info}>
            <div>
              <span className={styles.location}>
                home / {item.category} / {item.name}
              </span>
              <p className={styles.cat}>{item.category}</p>
              <h3 className={styles.infoname}>{item.name}</h3>
              <p className={styles.pl}>
                {item.slashPrice ? <span>$ {item.slashPrice}</span> : null}
                <p>$ {item.price}</p>
                {item.freeShipping ? <span>+ free shipping</span> : null}
              </p>
            </div>
            <div>
              <div className={styles.options}>
                {/* <input type="number" placeholder={1} defaultValue={1} /> */}
                <select>
                  <option>size</option>
                  {item.sizes.map((size, i) => (
                    <option key={i}> {size}</option>
                  ))}
                </select>
              </div>
              <button className={styles.btn} onClick={() => add(item)}>
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
