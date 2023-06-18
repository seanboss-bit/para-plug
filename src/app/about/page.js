import styles from '../../styles/about.module.css'
import Navbar from "../../../components/Navbar";
import AboutBody from "../../../components/AboutBody";
import Footer from "../../../components/Footer";

export const metadata = {
  icons: {
    icon: "/para.png",
    shortcut: "/para.png",
    apple: "/para.png",
  },
};

const page = () => {
  return (
    <div>
      <Navbar />^
      <div className={styles.bannerMin}>
        <img src="/banner.jpg" alt="#" />
      </div>
      <AboutBody />
      <Footer />
    </div>
  );
};

export default page;
