import { useEffect, useState } from "react";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Label from "../../../../components/Label";
import authService from '../../../../data/authentication/index'
import {useSelector} from 'react-redux'
import { useLocation } from "react-router-dom";

function DashboardHeader(props) {
  return (
    <div className="flex justify-between">
      {props.children}
      <div></div>
    </div>
  );
}



function DashboardRightSide(props) {

  

  const username =  useSelector(state => state.auth.user.firstname)
  const {pathname} = useLocation();

  
  
 
 // console.log(user);
  return (
    <div className="bg-pink-50 flex flex-col flex-1 overflow-auto md:ml-18 lg:ml-0 md:z-10 mb-16 md:mb-0 p-10">
      <DashboardHeader>
      {
          props.header 
          ? props.header : (<div>
          <h4 className="text-sm font-bold text-pink-600 capitalize">Hi {username},</h4>
          <h1 className="text-4xl font-bold text-pink-900 mt-">
            Welcome to payUP!
          </h1>
        </div>)
      }
        
      </DashboardHeader>
      <nav className=" p-3 rounded flex flex-row justify-end  w-full m-4">
  <ol className="list-reset flex text-grey-dark">
    <li><a href="#" className=" text-pink-500 font-bold">Home</a></li>
    <li><span className="mx-2 text-gray-600"> / </span></li>
    
   
    <li className="capitalize">{pathname.replace("/","")}</li>
  </ol>
</nav>
      <div>
      {props.children}
       </div>
    </div>
  );
}

export default DashboardRightSide;
