import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import StoreBody from "../../../components/StoreBody";
import { products } from "../../../data";

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
