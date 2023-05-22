import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import CartBody from "../../../components/CartBody";
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
      <CartBody />
      <Footer />
    </>
  );
};

export default page;
 