import styles from "../src/styles/category.module.css";

const Category = () => {
  return (
    <div>
      <div className="container">
        <div className={styles.allslides}>
          <div className={styles.firstslide}>
            <div className={styles.content}>
              <h3>Jordan 3 retro fire red 2022 </h3>
              <p>
                The Air Jordan 3 is known for its comfortable fit and durable
                construction, making it a great choice for both casual wear and
                athletic activity. As one of the most iconic sneakers in the
                Jordan Brand lineup, the Air Jordan 3 Fire Red "2022" release is
                sure to be a popular choice among sneaker enthusiasts and
                collectors alike
              </p>
              <a href="/store">shop now</a>
            </div>
          </div>
          <div className={styles.secondslide}>
            <div className={styles.content}>
              <h3>Nike SB x Air Jordan 4 </h3>
              <p>
                Step into the streets with the Nike SB x Air Jordan 4 "Pine
                Green" sneakers, a daring combination of classic design and
                modern style. the perfect finish, making you feel grounded and
                confident with every step.
              </p>
              <a href="/store">shop now</a>
            </div>
          </div>
          <div className={styles.thirdslide}>
            <div className={styles.content}>
              <h3>Travis Scott </h3>
              <p>
                The Air Jordan 1 Low "Fragment Design x Travis Scott" is a
                stylish and versatile sneaker that demands attention with its
                sleek white leather upper and bold black overlays. Featuring
                blue accents on the heel and sole, and co-branding from Nike,
                Fragment Design, and Travis Scott, this shoe is a unique and
                must-have addition to any sneaker collection."
              </p>
              <a href="/store">shop now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
