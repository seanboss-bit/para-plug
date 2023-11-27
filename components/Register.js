"use client";
import { useEffect, useState } from "react";
import styles from "../src/styles/login.module.css";
import {
  UserIcon,
  LockClosedIcon,
  EnvelopeIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import { useSearchParams, useRouter } from "next/navigation";
import { publicRequest } from "../requests";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "./Loading";
import { useSelector } from "react-redux";
import Link from "next/link";

const Register = () => {
  const [image, setImage] = useState(null);
  const [fullName, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState("");
  const user = useSelector((state) => state.user.user);

  const searchParams = useSearchParams();
  const route = useRouter();

  const [ref, setRef] = useState(searchParams.get("ref"));

  const uploadMultiple = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "b0krglfv");
    const { data } = await axios.post(
      "https://api.cloudinary.com/v1_1/dvo4tlcrx/image/upload",
      formData
    );
    console.log(data);
    return { publicId: data?.public_id, url: data?.secure_url };
  };

  // 6550f5458ab62b5156973253

  const registeruser = async () => {
    setLoading(true);
    try {
      if (
        fullName === "" ||
        username === "" ||
        email === "" ||
        password === "" ||
        image === null ||
        confirm === ""
      ) {
        toast.error("All Information is Required");
        setLoading(false);
      } else if (password !== confirm) {
        toast.error("Passwords do not match");
        setLoading(false);
      } else {
        const data = await uploadMultiple(image[0]);
        const res = await publicRequest.post("/user", {
          fullName,
          ref,
          email: email.toLowerCase(),
          password,
          image: data.url,
          username,
        });
        toast.success(res.data.message);
        route.push("/login");
        setLoading(false);
      }
    } catch (error) {
      toast.error(error.response.data.error);
      console.log(error);
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
        <h2>register</h2>
        <div className={styles.loginBo}>
          <input
            type="file"
            id="user_img"
            onChange={(e) => setImage(e.target.files)}
          />
          <label htmlFor="user_img">
            <img
              src={
                image !== null
                  ? URL.createObjectURL(image[0])
                  : "https://cdn-icons-png.flaticon.com/512/666/666201.png"
              }
              alt="#"
            />
          </label>
          <span>please select an image</span>
        </div>
        <div className={styles.loginFrame}>
          <div className={styles.loginBox}>
            <input
              type="text"
              placeholder="Fullname"
              onChange={(e) => setFullname(e.target.value)}
            />
            <UserIcon />
          </div>
          <div className={styles.loginBox}>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <UserIcon />
          </div>
        </div>
        <div className={styles.loginBox}>
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <EnvelopeIcon />
        </div>

        <div className={styles.loginFrame}>
          <div className={styles.loginBox}>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <LockClosedIcon />
          </div>
          <div className={styles.loginBox}>
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirm(e.target.value)}
            />
            <LockClosedIcon />
          </div>
        </div>
        <div className={styles.loginBox}>
          <input
            type="text"
            placeholder="Referral Code"
            value={ref}
            onChange={(e) => setRef(e.target.value)}
          />
          <LinkIcon />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            registeruser();
          }}
        >
          register
        </button>
        <div className={styles.new}>
          <p>Got an account?</p>
          <Link href={"/login"}>login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
