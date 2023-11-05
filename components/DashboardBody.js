import DashboardOrders from "./DashboardOrders";
import DashboardShowcas from "./DashboardShowcas";
import Refferal from "./Refferal";

const DashboardBody = () => {
  return (
    <>
      <DashboardShowcas />
      <DashboardOrders />
      <Refferal />
    </>
  );
};

export default DashboardBody;
