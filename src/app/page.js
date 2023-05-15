import Category from "../../components/Category";
import Logos from "../../components/Logos";
import Navbar from "../../components/Navbar";
import Recomended from "../../components/Recomended";
import Showcase from "../../components/Showcase";

export default function Home() {
  return (
    <>
      <Navbar />
      <Showcase />
      <Logos />
      <Category />
      <Recomended />
    </>
  );
}
