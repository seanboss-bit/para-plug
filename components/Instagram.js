"use client";
import styles from "../src/styles/instagram.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        <h2 className={styles.heading}>As seen on instagram</h2>
        <p className={styles.subheading}>
          Use #GotItOnParaplug and you could be featured.
        </p>
        <Slider {...settings}>
          <div className={styles.sliderImg}>
            <img
              src="https://www.wikihow.com/images/9/90/What_type_of_person_are_you_quiz_pic.png"
              alt="#"
            />
          </div>
          <div className={styles.sliderImg}>
            <img
              src="https://www.wikihow.com/images/9/90/What_type_of_person_are_you_quiz_pic.png"
              alt="#"
            />
          </div>
          <div className={styles.sliderImg}>
            <img
              src="https://www.wikihow.com/images/9/90/What_type_of_person_are_you_quiz_pic.png"
              alt="#"
            />
          </div>
          <div className={styles.sliderImg}>
            <img
              src="https://www.wikihow.com/images/9/90/What_type_of_person_are_you_quiz_pic.png"
              alt="#"
            />
          </div>
          <div className={styles.sliderImg}>
            <img
              src="https://www.wikihow.com/images/9/90/What_type_of_person_are_you_quiz_pic.png"
              alt="#"
            />
          </div>
          <div className={styles.sliderImg}>
            <img
              src="https://www.wikihow.com/images/9/90/What_type_of_person_are_you_quiz_pic.png"
              alt="#"
            />
          </div>
          <div className={styles.sliderImg}>
            <img
              src="https://www.wikihow.com/images/9/90/What_type_of_person_are_you_quiz_pic.png"
              alt="#"
            />
          </div>
          <div className={styles.sliderImg}>
            <img
              src="https://www.wikihow.com/images/9/90/What_type_of_person_are_you_quiz_pic.png"
              alt="#"
            />
          </div>
          
        </Slider>
      </div>
    </div>
  );
};

export default Instagram;
