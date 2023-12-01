"use client";
import { useRouter } from "next/navigation";
import styles from "../src/styles/user.module.css";
import { publicRequest } from "../requests";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { toast } from "react-toastify";
const Users = () => {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      const res = await publicRequest.get("/user");
      setUsers(res.data.users);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const adminify = async (answer, id) => {
    try {
      const res = await publicRequest.put("/user/" + id, {
        isAdmin: answer === "yes" ? true : false,
      });
      toast.success(res.data.message);
    } catch (error) {
      console.log(object);
    }
  };
  useEffect(() => {
    getUsers();
  }, [adminify]);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          <div className={styles.inner}>
            <div className={styles.top}>
              <h2>All Customers</h2>
              <input type="text" placeholder="Search user by Name" />
            </div>
            <div className={styles.bottom}>
              {users.map((user) => (
                <div className={styles.box} key={user._id}>
                  <img src={user.image} alt="#user_img" />
                  <p>{user?.fullName}</p>
                  <span>joined 20th december 2023</span>
                  <div className={styles.btnbox}>
                    {user.isAdmin ? (
                      <button
                        className={styles.re}
                        onClick={() => adminify("no", user._id)}
                      >
                        remove admin
                      </button>
                    ) : (
                      <button onClick={() => adminify("yes", user._id)}>
                        make admin
                      </button>
                    )}
                    <button
                      onClick={() => {
                        router.push(`/users/${user._id}`);
                      }}
                    >
                      view user details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
