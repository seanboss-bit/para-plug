import Category from "../../components/Category";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Logos from "../../components/Logos";
import Navbar from "../../components/Navbar";
import NewsLetter from "../../components/NewsLetter";
import Recomended from "../../components/Recomended";
import Showcase from "../../components/Showcase";

export const metadata = {
  icons: {
    icon: "/para.png",
    shortcut: "/para.png",
    apple: "/para.png",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Showcase />
      <Logos />
      <Category />
      <Recomended />
      <Features />
      <NewsLetter />
      <Footer />
    </>
  );
}
