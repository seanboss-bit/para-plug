import React from "react";
import styles from "../src/styles/refund.module.css";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const Refund = () => {
  return (
    <div className={styles.refund}>
      <div className="container">
        <h2>refund policy</h2>
        <span>process to return package</span>
        <div className={styles.two}>
          <div className={styles.address}>
            {/* <div className={styles.addressbox}>
              <h6>Location:</h6>
              <p>No 1 Jaba shopping complex, panisau road, Kano state.</p>
              <p>Federal secretariat along Airport road.</p>
            </div> */}
            <div className={styles.addressbox}>
              <h6>email:</h6>
              <p>paraplugs@gmail.com</p>
            </div>
            <div className={styles.addressbox}>
              <h6>phone:</h6>
              <p>No 1 Jaba shopping complex, panisau road, Kano state.</p>
              <p>Federal secretariat along Airport road.</p>
            </div>
            <div className={styles.socials}>
              <a href="#">
                {" "}
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className={styles.wordings}>
            <p>
              Paraplug has a 7 days return policy. This means we have only 7
              days after receiving your package to request a return the package.
            </p>
            <p>
              Firstly to start your return, you can contact us at
              paraplugs@gmail.com, Or reach out to our social platforms account
              ( Instagram, WhatsApp, TikTok, and Twitter)
            </p>
            <p>
              Please note that to enable your return, your package must be in
              the same condition that you received it, unworn or unused in its
              original packaging. Also with the receipt that would be attached
              to it. Also, Your package would be sent to either of the following
              addresses;
            </p>
            <p>
              No 1 Jaba shopping complex, panisau road, Kano state, Federal
              secretariat along airport road, kano state.
            </p>
            <p className={styles.ref}>Re-Funds.</p>
            <p>
              We will notify you once we’ve received your return to let you know
              if the refund was approved or not. If approved, you’d be
              automatically refunded your original amount paid and a receipt of
              payment would be sent to you.
            </p>
          </div>
        </div>
        <div className={styles.write}>
          <Link href="mailto:paraplugs@gmail.com">
            write to us <EnvelopeIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Refund;
