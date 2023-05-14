import Link from "next/link";
import styles from '../src/styles/showcase.module.css'

const Showcase = () => {
  return (
    <div className={styles.main}>
      <div className="container">
        <div className={styles.inner}>
          <h1>Para Plug</h1>
          <h4>Your Store For All Exclusive Nike And Jordan Sneakers</h4>
          <p>It is all about new arrivals!!!</p>
          <Link href={'/store'}>shop now</Link>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
