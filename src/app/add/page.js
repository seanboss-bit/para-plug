"use client";
import { useState } from "react";
import styles from "../../styles/add.module.css";
import axios from "axios";
import { publicRequest } from "../../../requests";
import { toast } from "react-toastify";
import Loading from "../../../components/Loading";
import LoginNav from "../../../components/LoginNav";

const page = () => {
  const [name, setName] = useState("");
  const [mainImg, setMainImg] = useState([]);
  const [price, setPrice] = useState("");
  const [slashPrice, setSlashPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [extraImg, setExtraImg] = useState([]);
  const [freeShipping, setFreeShipping] = useState(false);
  const [inStock, setInStock] = useState(true);
  const [size, setSize] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const handleSingleUpload = async () => {
    setLoading(true);
    try {
      let arr = [];
      const data = await uploadMultiple(mainImg[0]);
      for (let i = 0; i < extraImg.length; i++) {
        const data = await uploadMultiple(extraImg[i]);
        arr.push(data);
      }
      const res = await publicRequest.post("/product", {
        name: name,
        image: data.url,
        category: category,
        price: price,
        slashPrice: slashPrice,
        description: description,
        sizes: size,
        freeShipping: freeShipping,
        extraImg: arr.map((item) => item.url),
        inStock: inStock,
      });
      toast.success(res.data.message);
      if (res.data) {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.main}>
      <LoginNav />
      <div className="container">
        <h2 className={styles.heading}>add new kicks</h2>
        <form className={styles.addkick}>
          <div>
            <input
              type="text"
              placeholder="Enter Kicks Name"
              onChange={(e) => setName(e.target.value)}
            />
            <label>name*</label>
          </div>
          <div>
            <input
              type="file"
              placeholder="Enter Kicks Name"
              onChange={(e) => setMainImg(e.target.files)}
            />
            <label>main image*</label>
          </div>
          <div>
            <input
              type="number"
              placeholder="Enter Kicks Price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <label>kicks price*</label>
          </div>
          <div>
            <input
              type="number"
              placeholder="Enter Kicks Slash Price"
              onChange={(e) => setSlashPrice(e.target.value)}
            />
            <label>kicks Slash price</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter Kicks Category (Nike / Jordan)"
              onChange={(e) => setCategory(e.target.value)}
            />
            <label>kicks category*</label>
          </div>
          <div>
            <textarea
              placeholder="Enter Kicks Description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <label>kicks description*</label>
          </div>
          <div>
            <input
              type="file"
              multiple
              onChange={(e) => setExtraImg(e.target.files)}
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
            <select onChange={(e) => setFreeShipping(e.target.value)}>
              <option value={false}>no</option>
              <option value={true}>yes</option>
            </select>
            <label>free shipping</label>
          </div>
          <div>
            <select onChange={(e) => setInStock(e.target.value)}>
              <option value={true}>yes</option>
              <option value={false}>no</option>
            </select>
            <label>in stock*</label>
          </div>
        </form>
        {loading ? (
          <Loading />
        ) : (
          <button
            className={styles.btn}
            onClick={async () => {
              await handleSingleUpload();
            }}
          >
            add new kick
          </button>
        )}
      </div>
    </div>
  );
};

export default page;
