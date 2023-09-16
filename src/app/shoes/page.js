import AllShoes from "../../../components/AllShoes";
import LoginNav from "../../../components/LoginNav";

const page = () => {
  return (
    <div>
      <LoginNav />
      <div className="container">
        <h4 style={{margin: '30px 0px', textTransform: "uppercase"}}>All Shoes In Store</h4>
        <AllShoes />
      </div>
    </div>
  );
};

export default page;
