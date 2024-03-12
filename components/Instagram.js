"use client";
import styles from "../src/styles/instagram.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { publicRequest } from "../requests";
import { useEffect, useState } from "react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

const Instagram = () => {
  const [allPosts, setAllPosts] = useState([]);

  const getPost = async () => {
    try {
      const data = await publicRequest.get("/post");
      setAllPosts(data.data.allPost);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.main}>
      <div className="container">
        <p className={styles.subheading}>
          Use #Gotitonparaplug on your instagram post and get featured here.
        </p>
        {allPosts.length > 0 ? (
          <Slider {...settings}>
            {allPosts.map((post) => (
              <div className={styles.sliderImg} key={post?._id}>
                <img src={post?.image} alt="#" />
                <div className={styles.hover}>
                  <Link href={"/store"}>shop now</Link>
                  <p>@{post?.username}</p>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <>NO POST YET</>
        )}
      </div>
    </div>
  );
};

export default Instagram;
