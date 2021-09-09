import DashboardSidebar from "./DashboardStructure/DashboardSidebar";
import DashboardRightSide from "./DashboardStructure/DashboardRightSide";
import Label from "../../components/Label";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { DashboardStatisticCard } from "./DashboardStructure";



const DashBoard = (props) => {
  return (
    <div className="min-h-screen flex">
      <DashboardSidebar></DashboardSidebar>
      <DashboardRightSide
      header={props.header}
      >
      {props.children}
      
      </DashboardRightSide>
    </div>
  );
};
export default DashBoard;
