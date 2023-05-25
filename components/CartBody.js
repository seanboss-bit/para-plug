"use client";
import Link from "next/link";
import styles from "../src/styles/cart.module.css";
import {
  MinusIcon,
  PlusIcon,
  ArrowLongLeftIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  removeProductQuantity,
  addProductQuantity,
  clear,
  getCartTotal,
} from "@/redux/features/cartReducer";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { publicRequest } from "../requests";

const CartBody = () => {
  const products = useSelector((state) => state.cart.products);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const [payment, setPayment] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const remove = (item) => {
    dispatch(removeFromCart(item));
  };
  const addquantity = (item) => {
    dispatch(addProductQuantity(item));
  };
  const decrease = (item) => {
    dispatch(removeProductQuantity(item));
  };

  const makeOrder = async () => {
    if (name === "" || address === "" || phone === "" || email === "") {
      toast.error("Please All Information is Required");
    } else {
      const res = await publicRequest.post("/order", {
        name: name,
        orders: products,
        email,
        address,
        phone,
      });
      toast.success(res.data.message);
      dispatch(clear());
      setPayment(0);

      console.log(products);
    }
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
                <button onClick={() => setPayment(1)}>checkout</button>
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
        {payment === 0 ? null : (
          <div className={styles.accdetailscontainer}>
            <div className={styles.accdetailsbody}>
              <div className={styles.closebtn}>
                <XMarkIcon onClick={() => setPayment(0)} />
              </div>
              <span className={styles.accwarning}>
                please after payment make sure you send your payment receipt to
                the whatsapp number just click on the whatsapp icon below
              </span>
              <span className={styles.accwarning}>payment validates order</span>
              <span className={styles.pay}>
                you are about to pay {numberWithCommas(cart.total + 500)}
              </span>
              <div className={styles.accdetails}>
                <div>
                  <p>account name:</p>
                  <span>para plug</span>
                </div>
                <div>
                  <p>bank:</p>
                  <span>shalaye para bank</span>
                </div>
                <div>
                  <p>account number:</p>
                  <span>para001</span>
                </div>
              </div>
              <form className={styles.userdata}>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Name Used In Making Transfer"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Enter Phone Number"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <textarea
                    placeholder="Enter Your Address"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </form>
              <button className={styles.done} onClick={() => makeOrder()}>
                order kicks now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartBody;
