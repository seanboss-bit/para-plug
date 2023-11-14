"use client";
import { useSelector } from "react-redux";
import styles from "../src/styles/dashboard.module.css";
import { DocumentDuplicateIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { publicRequest } from "../requests";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { toast } from "react-toastify";

const Refferal = () => {
  const user = useSelector((state) => state.user.user);
  const [refs, setRefs] = useState([]);

  const getRefs = async () => {
    try {
      const res = await publicRequest.get(`/user/find/ref/${user?._id}`);
      setRefs(res.data.userRefs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRefs();
  }, []);
  return (
    <div>
      <div className="container">
        <div className={styles.refInner}>
          <h2>referral system</h2>
          <p>
            refer 10 people and get a free sneaker from our sneaker collection
          </p>
        </div>
        <div className={styles.refBody}>
          <h3>
            your referrals <span>{refs.length}/10</span>
          </h3>
          <p>
            your <span>seven</span> steps away from claiming a free sneaker
          </p>

          <div className={styles.progressBody}>
            <div className={styles.progress}>
              <div
                className={styles.progressBar}
                style={{
                  background: "#0084d6",
                  width: `${(refs.length / 10) * 100}%`,
                  height: "100%",
                }}
              ></div>
            </div>
            <span>{refs.length}/10 referrals made</span>
          </div>

          <h4 className={styles.shareMain}>share link</h4>
          <span className={styles.shareText}>
            share your referral link to get all kicked up
          </span>

          <div className={styles.ref}>
            <div className={styles.shareLink}>
              <div className={styles.link}>
                <span>{`https://paraplug.store/register?ref=${user?._id}`}</span>
                <CopyToClipboard
                  text={`https://paraplug.store/register?ref=${user?._id}`}
                >
                  <button onClick={() => toast.info("Copied")}>
                    <DocumentDuplicateIcon />
                    copy link
                  </button>
                </CopyToClipboard>
              </div>
            </div>
            <div className={styles.socialRow}>
              <WhatsappShareButton
                url={`https://paraplug.store/register?ref=${user?._id}`}
              >
                <div className={styles.socialBox}>
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
              </WhatsappShareButton>
              <TelegramShareButton
                url={`https://paraplug.store/register?ref=${user?._id}`}
              >
                <div className={styles.socialBox}>
                  <i className="fa-brands fa-telegram"></i>
                </div>
              </TelegramShareButton>
              <FacebookShareButton
                url={`https://paraplug.store/register?ref=${user?._id}`}
              >
                <div className={styles.socialBox}>
                  <i className="fa-brands fa-facebook"></i>
                </div>
              </FacebookShareButton>
              <TwitterShareButton
                url={`https://paraplug.store/register?ref=${user?._id}`}
              >
                <div className={styles.socialBox}>
                  <i className="fa-brands fa-twitter"></i>
                </div>
              </TwitterShareButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refferal;
