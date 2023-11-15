"use client";
import { useEffect, useState } from "react";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import styles from "../src/styles/login.module.css";
import { publicRequest } from "../requests";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/redux/features/userReducer";
import Loading from "./Loading";

const Login = () => {
  const route = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user.user);

  const loginUser = async () => {
    setLoading(true);
    if (username === "" || password === "") {
      toast.error("Please Fill All Fields");
      setLoading(false);
    } else {
      try {
        const res = await publicRequest.post("/user/login", {
          email: username,
          password,
        });
        if (res.data.message === "A Confirmation Email Has Been Sent!!!") {
          toast.info("A Confirmation Email Has Been Sent!!!");
        } else {
          dispatch(login(res.data));
          setLoading(false);
          toast.success(`Welcome ${res.data.fullName}`);
        }
        if (res.data.isAdmin) {
          route.push("/admin");
        } else {
          route.push(`/dashboard/${res.data._id}`);
        }
        console.log(res);
      } catch (error) {
        toast.error(error?.response?.data?.error);
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (user !== null && user?.isAdmin) {
      route.push("/admin");
    } else if (user !== null && !user?.isAdmin) {
      route.push(`/dashboard/${user?._id}`);
    }
  }, [user]);
  return (
    <div className={styles.main}>
      {loading && <Loading />}
      <div className={styles.login}>
        <h2>paraplug login</h2>
        <div className={styles.loginBox}>
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setUsername(e.target.value)}
          />
          <EnvelopeIcon />
        </div>
        <div className={styles.loginBox}>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <LockClosedIcon />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            loginUser();
          }}
        >
          login
        </button>
      </div>
    </div>
  );
};

export default Login;
