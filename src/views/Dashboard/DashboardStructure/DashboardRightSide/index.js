import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Label from "../../../../components/Label";

function DashboardHeader(props) {
  return (
    <div className="flex justify-between">
      {props.children}
      <div></div>
    </div>
  );
}



function DashboardRightSide(props) {
  return (
    <div className="bg-pink-50 flex-grow py-12 px-10">
      <DashboardHeader>
      {
          props.header 
          ? props.header : (<div>
          <h4 className="text-sm font-bold text-pink-600">Hi Damola,</h4>
          <h1 className="text-4xl font-bold text-pink-900 mt-">
            Welcome to payUP!
          </h1>
        </div>)
      }
        
      </DashboardHeader>
      <div>
      {props.children}
       </div>
    </div>
  );
}

export default DashboardRightSide;
