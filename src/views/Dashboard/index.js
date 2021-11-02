import DashboardSidebar from "./DashboardStructure/DashboardSidebar";
import DashboardRightSide from "./DashboardStructure/DashboardRightSide";
import Label from "../../components/Label";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { DashboardStatisticCard } from "./DashboardStructure";



const DashBoard = ({children , ...rest}) => {
  return (
    <div className="min-h-screen flex">
      <DashboardSidebar></DashboardSidebar>
      <DashboardRightSide
      {...rest}
      >
      {children}
      </DashboardRightSide>
    </div>
  );
};
export default DashBoard;
