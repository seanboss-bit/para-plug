"use client";
import { useParams, useRouter } from "next/navigation";
import { publicRequest } from "../requests";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Confirm = () => {
  const params = useParams();
  const id = params.id.split("/")[0];
  const token = params.id.split("/")[1];
  const route = useRouter();

  const [error, setError] = useState(false);

  const verify = async () => {
    try {
      const res = await publicRequest.get(`/user/${id}/${token}`);
      toast.success(res.data.message);
      route.push("/login");
    } catch (error) {
      setError(true);
      console.log(error);
      toast.error(error.response?.data?.error);
    }
  };

  useEffect(() => {
    verify();
  }, []);
  return (
    <div>
      {error ? <>AN ERROR OCUURED: INVALID LINK</> : <>REDIRECTING........</>}
    </div>
  );
};

export default Confirm;
