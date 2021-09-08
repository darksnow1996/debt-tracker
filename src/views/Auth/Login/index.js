import AuthTemplate from "../AuthTemplate";
import Label from "../../../components/Label";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Register from "../Register";

const Login = (props) => {
  return (
    <div className=" flex flex-row justify-center bg-gray-200 items-center w-full h-screen">
      <AuthTemplate
      subtitle="Don't think about your finances. We'd do that for you."
      formtitle="Log In"
      >
         <div className="relative mb-4">
              <Label title="Email"></Label>
              <Input type="text" name="full-name"></Input>
            </div>
            <div className="relative mb-4">
              <Label title="Password"></Label>
              <Input type="password" name="email"></Input>
            </div>
            <Button title="Login In"></Button>
      </AuthTemplate>
    </div>
  );
};

export default Login;

