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
import { usePaystackPayment } from "react-paystack";
import Loading from "./Loading";
import { useRouter } from "next/navigation";

const CartBody = () => {
  const products = useSelector((state) => state.cart.products);
  const cart = useSelector((state) => state.cart);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const user = useSelector((state) => state.user.user);

  const [payment, setPayment] = useState(0);
  const [name, setName] = useState(user?.fullName);
  const [email, setEmail] = useState(user?.email);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const router = useRouter();
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
    setLoading(true);
    const res = await publicRequest.post("/order", {
      name: name,
      orders: products,
      email,
      address,
      phone,
      userId: user?._id,
      total: cart.total >= 150000 ? cart.total : cart.total + 3500,
    });
    toast.success(res.data.message);
    router.push("/thanks");
    setLoading(false);
    dispatch(clear());
  };
  useEffect(() => {
    dispatch(getCartTotal());
  }, [products]);

  // PAYSTACK

  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount:
      cart.total >= 150000 ? cart.total * 100 : cart.total * 100 + 3500 * 100,

    // publicKey: "pk_test_57fa1e02ffb5765c3aaa7c812852a52739366451",
    publicKey: "pk_live_ac6b008808fcabb5ad2b4fe75792b852672127dc",
  };

  // you can call this function anything
  const onSuccess = (reference) => {
    setPayment(0);
    makeOrder();
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    toast.error("Transaction Closed");
    console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);

  const toPay = () => {
    if (name === "" || address === "" || phone === "" || email === "") {
      toast.error("All Fields Required");
    } else {
      initializePayment(onSuccess, onClose);
    }
  };
  return (
    <div className={styles.cartbody}>
      {loading && <Loading />}
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
                    <img src={product.image} alt="shoe_image" />
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
                {cart.total >= 200000 ? null : (
                  <div className={styles.subtotal}>
                    <span>shipping</span>
                    <span className={styles.amount}>NGN 3,500</span>
                  </div>
                )}
                <div className={styles.subtotal}>
                  <span>total</span>
                  <span className={styles.amount}>
                    NGN{" "}
                    {cart.total >= 150000
                      ? numberWithCommas(cart.total)
                      : numberWithCommas(cart.total + 3500)}
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
              <span className={styles.pay}>
                you are about to pay{" "}
                {cart.total >= 150000
                  ? numberWithCommas(cart.total)
                  : numberWithCommas(cart.total + 3500)}
              </span>
              <form className={styles.userdata}>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    value={user?.fullName}
                  />
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    value={user?.email}
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
              <button className={styles.done} onClick={() => toPay()}>
                <img
                  src="https://static-00.iconduck.com/assets.00/paystack-icon-512x504-w7v8l6as.png"
                  alt="shoe_image"
                />
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
