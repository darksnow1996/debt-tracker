import AuthTemplate from "../AuthTemplate";
import Label from "../../../components/Label";
import Input from "../../../components/Input";
import  {Button, ButtonLink } from "../../../components/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useToasts } from "react-toast-notifications";
import authService from "../../../data/authentication";

const Register = (props) => {

  const {register, handleSubmit, watch, reset, formState: { errors }} = useForm();
  const {addToast} = useToasts();
  const[isLoading, setIsLoading] = useState(false);
  const[isError,setIsError] = useState(false);

  const formSubmit = async(data)=>{
    try{
      setIsLoading(true)
      const {firstname, lastname,email,password,cpassword} = data;
      const registerData = await authService.register({
        firstname,lastname,email,password,cpassword
      })
      setIsLoading(false)
      addToast(registerData.message, {appearance:"success"})
      reset();
    }
    catch(error){
     // console.log(error)
     setIsLoading(false)
      addToast(error.message, {appearance: "error"})
    }
  }

  const onFormError = () =>{
    addToast("Form data is invalid",{appearance:"error"})
  }

    return (
        <div className="bg-no-repeat bg-cover bg-center relative landing-bg"><div className="absolute bg-gradient-to-b from-gray-500 to-gray-400 opacity-75 inset-0 z-0"></div>
      <div className=" flex flex-row justify-center  items-center w-full h-screen z-10">
        <AuthTemplate
        subtitle="Don't think about your finances. We'd do that for you."
        formtitle="Sign Up"
        formSubtitle = {<div>Have an account?...<Link to="/login" className="text-pink-500">Log In</Link></div>}
        >
         <form className="relative" onSubmit={handleSubmit(formSubmit,onFormError)}>
           <div className="relative mb-4">
                <Label title="First Name"></Label>
                <Input type="text" register={register}  label="firstname" rules={{
                required: true,

              }}></Input>
              </div>
              <div className="relative mb-4">
                <Label title="Last Name"></Label>
                <Input type="text" register={register}  label="lastname" rules={{
                required: true,

              }}></Input>
              </div>
              <div className="relative mb-4">
                <Label title="Email"></Label>
                <Input type="email" register={register}  label="email" rules={{
                required: true,

              }}></Input>
              </div>
              <div className="relative mb-4">
                <Label title="Password"></Label>
                <Input type="password" register={register}  label="password" rules={{
                required: true,

              }}></Input>
              </div>
              <div className="relative mb-4">
                <Label title="Confirm password"></Label>
                <Input type="password" register={register}  label="cpassword" rules={{
                required: true,

              }}></Input>
              </div>
              <Button type="submit" disabled={isLoading ? 'disabled': ''}  title={isLoading ? 'Loading...': 'sign up'}></Button>
              </form>
        </AuthTemplate>
      </div>
      </div>
    );
  };
  
  export default Register;
