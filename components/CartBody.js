"use client";
import Link from "next/link";
import styles from "../src/styles/cart.module.css";
import {
  MinusIcon,
  PlusIcon,
  ArrowLongLeftIcon,
} from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  removeProductQuantity,
  addProductQuantity,
  clear,
  getCartTotal,
} from "@/redux/features/cartReducer";
import { useEffect } from "react";

const CartBody = () => {
  const products = useSelector((state) => state.cart.products);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const remove = (item) => {
    dispatch(removeFromCart(item));
  };
  const addquantity = (item) => {
    dispatch(addProductQuantity(item));
  };
  const decrease = (item) => {
    dispatch(removeProductQuantity(item));
  };
  useEffect(() => {
    dispatch(getCartTotal());
  }, [products]);
  return (
    <div className={styles.cartbody}>
      <div className="container">
        <h1>cart ({products.length})</h1>
        {products.length > 0 ? (
          <div>
            <div className={styles.titles}>
              <h3 className={styles.productitile}>product</h3>
              <h3 className="price">price</h3>
              <h3 className="quantity">quantity</h3>
              <h3 className={styles.total}>total</h3>
            </div>
            <div className="cartitems">
              {products.map((product) => (
                <div className={styles.cartItem} key={product._id}>
                  <div className={styles.cartproduct}>
                    <img src={product.image} alt="#" />
                    <div>
                      <h3>{product.name}</h3>
                      <p>{product.category}</p>
                      <button onClick={() => remove(product)}>remove</button>
                    </div>
                  </div>
                  <div className={styles.cartprice}>
                    NGN {numberWithCommas(product.price)}
                  </div>
                  <div className={styles.res}>
                    <div className={styles.cartquantity}>
                      <button onClick={() => decrease(product)}>
                        <MinusIcon />
                      </button>
                      <div className="count">{product.cartQuantity}</div>
                      <button onClick={() => addquantity(product)}>
                        <PlusIcon />
                      </button>
                    </div>
                  </div>
                  <div className={styles.carttotal}>
                    NGN {numberWithCommas(product.cartQuantity * product.price)}
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.cartsummary}>
              <button
                className={styles.clearcart}
                onClick={() => dispatch(clear())}
              >
                clear cart
              </button>
              <div className={styles.cartcheckout}>
                <div className={styles.subtotal}>
                  <span>subtotal</span>
                  <span className={styles.amount}>
                    NGN {numberWithCommas(cart.total)}
                  </span>
                </div>
                <div className={styles.subtotal}>
                  <span>shipping</span>
                  <span className={styles.amount}>NGN 500</span>
                </div>
                <div className={styles.subtotal}>
                  <span>total</span>
                  <span className={styles.amount}>
                    NGN {numberWithCommas(cart.total + 500)}
                  </span>
                </div>
                <button>checkout</button>
                <Link href={"/store"}>
                  <ArrowLongLeftIcon /> continue shopping
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.empty}>
            <p>your cart is currently empty</p>
            <Link href={"/store"}>
              <ArrowLongLeftIcon /> start shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartBody;
