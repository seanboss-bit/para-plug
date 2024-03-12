"use client";
import { useEffect, useState } from "react";
import styles from "../src/styles/instagram.module.css";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { publicRequest } from "../requests";
import { toast } from "react-toastify";
import axios from "axios";
import Loading from "./Loading";
const Hashtag = () => {
  const [image, setImage] = useState(null);
  const [showAdd, setShowAdd] = useState(false);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const [sloading, setsLoading] = useState(false);
  const [allPosts, setAllPosts] = useState([]);

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

  const uploadPost = async () => {
    setsLoading(true);
    try {
      const data = await uploadMultiple(image[0]);
      const res = publicRequest.post("/post", {
        image: data?.url,
        username: username,
      });
      toast.success((await res).data.message);
      setsLoading(false);
      setShowAdd(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getPost = async () => {
    try {
      const data = await publicRequest.get("/post");
      setAllPosts(data.data.allPost);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const deletePost = async (id) => {
    setsLoading(true);
    try {
      const res = await publicRequest.delete(`/post/${id}`);
      setsLoading(false);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, [deletePost, uploadPost]);

  return (
    <div>
      {loading && <Loading />}
      <div className="container">
        <h2 className={styles.ig}>instagram pictures</h2>
        <div>
          <button className={styles.add} onClick={() => setShowAdd(true)}>
            add new
          </button>
        </div>
        <div className={styles.dis}>
          {allPosts?.map((post) => (
            <div className={styles.disbox} key={post._id}>
              <img src={post?.image} alt="#" />
              <button onClick={() => deletePost(post._id)}>delete post</button>
            </div>
          ))}
        </div>
      </div>
      {showAdd && (
        <div className={styles.popupbg}>
          <div className={styles.popupbody}>
            <div className={styles.close}>
              <XMarkIcon onClick={() => setShowAdd(false)} />
            </div>
            <h4 className={styles.poptitle}>add new</h4>
            <div className={styles.popinner}>
              <input
                type="file"
                id="igupload"
                onChange={(e) => setImage(e.target.files)}
              />
              <label htmlFor="igupload">
                <img
                  src={
                    image !== null
                      ? URL.createObjectURL(image[0])
                      : "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
                  }
                  alt="#"
                />
              </label>
              <div>
                <input
                  type="text"
                  placeholder="Enter Customer Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
                {sloading ? (
                  <Loading />
                ) : (
                  <button
                    onClick={() => {
                      if (image === null || username === "") {
                        toast.error("Enter All details");
                      } else {
                        uploadPost();
                      }
                    }}
                  >
                    add post
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hashtag;
