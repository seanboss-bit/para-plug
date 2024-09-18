import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Refund from "../../../components/Refund";
export const metadata = {
  icons: {
    icon: "/para.png",
    shortcut: "/para.png",
    apple: "/para.png",
  },
};

const page = () => {
  return (
    <>
      <Navbar />
      <Refund />
      <Footer />
    </>
  );
};

export default page;
