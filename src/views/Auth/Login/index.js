import AuthTemplate from "../AuthTemplate";
import Label from "../../../components/Label";
import Input from "../../../components/Input";
import {ButtonLink, Button} from "../../../components/Button";
import Register from "../Register";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import authService from "../../../data/authentication";
import {useHistory} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {loginUser} from '../../../redux/actions'


const Login = (props) => {

const {register, handleSubmit, watch, formState: { errors }} = useForm();
const {addToast} = useToasts();

const history = useHistory();
const dispatch = useDispatch();
const loginError = useSelector((state)=>state.auth.loginErr);
const isLoading = useSelector((state)=>state.auth.loading);


  // if(loginError){
  //   addToast(loginError,{appearance:"error"});
  // }
  
const onFormError = (errors) => {
  // console.log(errors)
  addToast("Form data is invalid",{appearance:"error"})
}

  const submitForm =  async(data) => {
    try{
    await dispatch(loginUser(data))
      // history.push("/dashboard")
       //console.log("supposed");

    }
    catch(error){
      addToast(error.message,{appearance:"error"})
    }
   
   

  }
  return (
    <div className="bg-no-repeat bg-cover bg-center relative landing-bg"><div className="absolute bg-gradient-to-b from-gray-500 to-gray-400 opacity-75 inset-0 z-0"></div>
    <div className=" flex flex-row justify-center  items-center w-full h-screen z-10">
      <AuthTemplate
      subtitle="Don't worry about your friendly loans. We'd do that for you"
      formtitle="Log In"
      formSubtitle = {<span>Don't have an account?...<Link to="/register" className="text-pink-500">Sign Up</Link></span>}
      >
      <form className="relative" onSubmit={handleSubmit(submitForm,onFormError)}>
         <div className="relative mb-4">
              <Label title="Email"></Label>
              <Input register={register} type="email" label="email" rules={{
                required: true,

              }} ></Input>
            </div>
            <div className="relative mb-4">
              <Label title="Password"></Label>
              <Input register={register} type="password" label="password" rules={{
                required: true,

              }}></Input>
            </div>
            
            <Button
            type="submit"
            disabled={isLoading ? 'disabled': ''}
              title={isLoading ? "Loading....": "Login"}></Button>

            </form>
      </AuthTemplate>
    </div>
    </div>
  );
};

export default Login;

