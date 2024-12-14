import Banner from "../../components/Banner";
import Category from "../../components/Category";
import Footer from "../../components/Footer";
import Instagram from "../../components/Instagram";
import Logos from "../../components/Logos";
import Navbar from "../../components/Navbar";
import NewsLetter from "../../components/NewsLetter";
import Recomended from "../../components/Recomended";
import ScrollingText from "../../components/ScrollingText";
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
      {/* <Banner /> */}
      <ScrollingText
        text="Get FREE delivery on all orders above NGN300,000 • Get FREE acrylic shox box on all purchase • Show trending releases."
        speed={3}
        className="bg-green-100"
      />
      <>
        <Navbar />
        <Showcase />
        <Logos />
        <Category />
        <Recomended />
        <NewsLetter />
        <Instagram />
        <Footer />
      </>
    </>
  );
}
