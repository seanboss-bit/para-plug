import Navbar from "../../../components/Navbar";
import Head from "next/head";
import Footer from "../../../components/Footer";
import Refund from "../../../components/Refund";


const page = () => {
 
  return (
    <div>
      <Head>
        <title>Refund Policy - ParaPlug Store</title>
      </Head>
      <Navbar />
      <Refund />
      <Footer />
    </div>
  );
};

export default page;
