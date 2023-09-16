"use client";
import { UserIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import styles from "../../styles/login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { login } from "@/redux/features/userReducer";
import { useRouter } from "next/navigation";
const page = () => {
  const user = useSelector((state) => state.user.user);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    if (user !== null) {
      window.location = "/admin";
    }
  }, [user]);

  const loginPara = () => {
    if (username === "" || password === "") {
      toast.error("All Fields Required");
    } else if (username === "paraplug" && password === "paraplugadmin") {
      dispatch(login({ username, role: "admin" }));
      router.push('/admin')
      toast.success("Welcome Admin");
    } else {
      toast.error("Wrong Credentials");
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.login}>
        <h2>paraplug login</h2>
        <div className={styles.loginBox}>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <UserIcon />
        </div>
        <div className={styles.loginBox}>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <LockClosedIcon />
        </div>
        <button onClick={() => loginPara()}>login</button>
      </div>
    </div>
  );
};

export default page;
