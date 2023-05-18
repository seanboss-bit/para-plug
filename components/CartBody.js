import Link from "next/link";
import styles from "../src/styles/cart.module.css";
import {
  MinusIcon,
  PlusIcon,
  ArrowLongLeftIcon,
} from "@heroicons/react/24/outline";

const CartBody = () => {
  return (
    <div className={styles.cartbody}>
      <div className="container">
        <h1>cart (1)</h1>
        <div>
          <div className={styles.titles}>
            <h3 className={styles.productitile}>product</h3>
            <h3 className="price">price</h3>
            <h3 className="quantity">quantity</h3>
            <h3 className={styles.total}>total</h3>
          </div>
          <div className="cartitems">
            <div className={styles.cartItem}>
              <div className={styles.cartproduct}>
                <img
                  src="https://paraplug.org/wp-content/uploads/2021/03/sports-shoe1-600x600.jpg"
                  alt="#"
                />
                <div>
                  <h3>product name or title</h3>
                  <p>nike or jordan</p>
                  <button>remove</button>
                </div>
              </div>
              <div className={styles.cartprice}>$ 300</div>
              <div className={styles.res}>
                <div className={styles.cartquantity}>
                  <button>
                    <MinusIcon />
                  </button>
                  <div className="count">3</div>
                  <button>
                    <PlusIcon />
                  </button>
                </div>
              </div>
              <div className={styles.carttotal}>$ 500</div>
            </div>
          </div>
          <div className={styles.cartsummary}>
            <button className={styles.clearcart}>clear cart</button>
            <div className={styles.cartcheckout}>
              <div className={styles.subtotal}>
                <span>subtotal</span>
                <span className={styles.amount}>$999</span>
              </div>
              <div className={styles.subtotal}>
                <span>shipping</span>
                <span className={styles.amount}>$500</span>
              </div>
              <div className={styles.subtotal}>
                <span>total</span>
                <span className={styles.amount}>$1499</span>
              </div>
              <button>checkout</button>
              <Link href={"/store"}>
                <ArrowLongLeftIcon /> continue shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBody;
