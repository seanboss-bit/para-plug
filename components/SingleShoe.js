"use client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import { publicRequest } from "../requests";
import styles from "../src/styles/admin.module.css";
import Loading from "./Loading";
import { toast } from "react-toastify";
import axios from "axios";

const SingleShoe = () => {
  const [singleItem, setSingleItem] = useState();
  const [loading, setLoading] = useState(false);
  const id = useParams();
  const router = useRouter();
  const [updatedKicks, setUpadatedKick] = useState({});
  const [size, setSize] = useState([]);

  const kicksValue = (e) => {
    setUpadatedKick({ ...updatedKicks, [e.target.name]: e.target.value });
  };

  const getItem = async () => {
    setLoading(true);
    try {
      const res = await publicRequest.get(`/product/find/${id.id}`);
      setSingleItem(res.data.product);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getItem();
  }, [id.id]);

  const deleteKick = async () => {
    setLoading(true);
    try {
      const res = await publicRequest.delete(`/product/${id.id}`);
      toast.success(res.data.message);
      setLoading(false);
      router.push("/shoes");
    } catch (error) {
      console.log(error);
    }
  };

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

  const handleSingleUpload = async (e) => {
    e.preventDefault();
    console.log({ ...updatedKicks, new: "abk" });
    setLoading(true);
    let arr = [];
    if (updatedKicks.mainImg) {
      try {
        const data = await uploadMultiple(updatedKicks.mainImg[0]);

        const res = await publicRequest.put(`/product/${id.id}`, {
          image: data.url,
          ...updatedKicks,
        });
        toast.success(res.data.message);
        router.push("/shoes");
        if (res.data) {
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    } else if (updatedKicks.extraImg) {
      try {
        for (let i = 0; i < updatedKicks.extraImg.length; i++) {
          const data = await uploadMultiple(updatedKicks.extraImg[i]);
          arr.push(data);
        }
        const res = await publicRequest.put(`/product/${id.id}`, {
          extraImg: arr.map((item) => item.url),
          ...updatedKicks,
        });
        toast.success(res.data.message);
        router.push("/shoes");
        if (res.data) {
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
    if (size) {
      try {
        const res = await publicRequest.put(`/product/${id.id}`, {
          sizes: size,
          ...updatedKicks,
        });
        toast.success(res.data.message);
        router.push("/shoes");
        if (res.data) {
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const res = await publicRequest.put(`/product/${id.id}`, {
          ...updatedKicks,
        });
        toast.success(res.data.message);
        router.push("/shoes");
        if (res.data) {
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div>
      {loading && <Loading />}
      <div className="container">
        <div className={styles.shoesinner}>
          <div className={styles.shoeimg}>
            <img src={singleItem?.image} alt="#" />
            <button className={styles.deletebtn} onClick={() => deleteKick()}>
              delete
            </button>
          </div>
          <div className={styles.shoeseditside}>
            <form className={styles.addkick}>
              <div>
                <input
                  type="text"
                  placeholder="Enter Kicks Name"
                  onChange={(e) => kicksValue(e)}
                  name="name"
                />
                <label>name* (old name: {singleItem?.name})</label>
              </div>
              <div>
                <input
                  type="file"
                  placeholder="Enter Kicks Name"
                  onChange={(e) => kicksValue(e)}
                  image="image"
                />
                <label>main image*</label>
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Enter Kicks Price"
                  onChange={(e) => kicksValue(e)}
                  name="price"
                />
                <label>kicks price* (old price: {singleItem?.price})</label>
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Enter Kicks Slash Price"
                  onChange={(e) => kicksValue(e)}
                  name="slashPrice"
                />
                <label>
                  kicks Slash price (old slash price: {singleItem?.slashPrice})
                </label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter Kicks Category (Nike / Jordan)"
                  onChange={(e) => kicksValue(e)}
                  name="category"
                />
                <label>kicks category*</label>
              </div>
              <div>
                <textarea
                  placeholder="Enter Kicks Description"
                  onChange={(e) => kicksValue(e)}
                  name="description"
                />
                <label>kicks description*</label>
              </div>
              <div>
                <input
                  type="file"
                  multiple
                  onChange={(e) => kicksValue(e)}
                  name="extraImg"
                />
                <label>select extra images*</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter Kicks Sizes"
                  onChange={(e) => setSize(e.target.value.split(","))}
                />
                <label>kicks sizes*</label>
              </div>
              <div>
                <select onChange={(e) => kicksValue(e)} name="freeShipping">
                  <option value={false}>no</option>
                  <option value={true}>yes</option>
                </select>
                <label>free shipping</label>
              </div>
              <div>
                <select onChange={(e) => kicksValue(e)} name="inStock">
                  <option value={true}>yes</option>
                  <option value={false}>no</option>
                </select>
                <label>in stock*</label>
              </div>
              {loading ? null : (
                <button
                  className={styles.btn}
                  onClick={async (e) => {
                    await handleSingleUpload(e);
                  }}
                >
                  update kicks
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleShoe;
