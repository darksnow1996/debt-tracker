import AuthTemplate from "../AuthTemplate";
import Label from "../../../components/Label";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";

const Register = (props) => {
    return (
        <div className="bg-no-repeat bg-cover bg-center relative landing-bg"><div className="absolute bg-gradient-to-b from-gray-500 to-gray-400 opacity-75 inset-0 z-0"></div>
      <div className=" flex flex-row justify-center  items-center w-full h-screen z-10">
        <AuthTemplate
        subtitle="Don't think about your finances. We'd do that for you."
        formtitle="Sign Up"
        formSubtitle = {<div>Have an account?...<Link to="/login" className="text-pink-500">Log In</Link></div>}
        >
           <div className="relative mb-4">
                <Label title="Full Name"></Label>
                <Input type="text" name="full-name"></Input>
              </div>
              <div className="relative mb-4">
                <Label title="Email"></Label>
                <Input type="email" name="email"></Input>
              </div>
              <Button title="sign up"></Button>
        </AuthTemplate>
      </div>
      </div>
    );
  };
  
  export default Register;
