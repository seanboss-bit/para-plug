import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import StoreBody from "../../../components/StoreBody";
import { products } from "../../../data";
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
      <Navbar />
      <StoreBody products={products} />
      <Footer />
    </div>
  );
};

export default page;
