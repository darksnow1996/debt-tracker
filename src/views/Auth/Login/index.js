import AuthTemplate from "../AuthTemplate";
import Label from "../../../components/Label";
import Input from "../../../components/Input";
import {ButtonLink, Button} from "../../../components/Button";
import Register from "../Register";
import { Link, Redirect } from "react-router-dom";

const Login = (props) => {



  const submitForm = () => {

  }
  return (
    <div className="bg-no-repeat bg-cover bg-center relative landing-bg"><div className="absolute bg-gradient-to-b from-gray-500 to-gray-400 opacity-75 inset-0 z-0"></div>
    <div className=" flex flex-row justify-center  items-center w-full h-screen z-10">
      <AuthTemplate
      subtitle="Don't worry about your friendly loans. We'd do that for you"
      formtitle="Log In"
      formSubtitle = {<span>Don't have an account?...<Link to="/register" className="text-pink-500">Sign Up</Link></span>}
      >
      <form className="relative" onSubmit={(e)=> {
         e.preventDefault()
         //console.log("here")
        window.location.href="/dashboard"
         }}>
         <div className="relative mb-4">
              <Label title="Email"></Label>
              <Input type="text" name="full-name" required></Input>
            </div>
            <div className="relative mb-4">
              <Label title="Password"></Label>
              <Input type="password" name="email" required></Input>
            </div>
            
            <Button
            type="submit"
             onClick={submitForm} title="Login"></Button>

            </form>
      </AuthTemplate>
    </div>
    </div>
  );
};

export default Login;

