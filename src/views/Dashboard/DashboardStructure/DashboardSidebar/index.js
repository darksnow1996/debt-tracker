import { Link } from "react-router-dom";
import React, { useState } from "react";
import DashboardSidebarItems from "./DashboardSidebarItems";
import DashboardSidebarItem from "./DashboardSidebarItem";
import authService from '../../../../data/authentication/index'
import {useHistory,useLocation} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {logoutUser} from '../../../../redux/actions'


function DashboardSidebar({defaultActive}) {
  const history = useHistory();
  const dispatch = useDispatch();
  const {pathname} = useLocation();


 // console.log(pathname);
  const handleLogout = ()=> {
   
   dispatch(logoutUser())

  // history.replace("/login")

  }
	const [activeIndex, setActiveIndex] = useState(defaultActive || 1);
  return (
    <div className="absolute overflow-hidden bottom-0 md:relative w-screen flex md:flex-col md:min-h-screen md:h-full md:py-12 md:px-10 md:w-64">
      <div className="hidden md:flex md:space-2 md:items-center md:border-b-2 md:pb-4">
        <div>
         
        </div>
        <div className="md:ml-3 hidden md:block">
          <h1 className="text-3xl font-bold text-pink-600">payUP</h1>
          <p className="text-center text-sm text-pink-600 mt-1 font-serif">
            Track your friendly loans
          </p>
        </div>
      </div>

      <div className="md:mt-8">
        <ul className="flex md:flex-col bg-pink-300 md:bg-transparent w-screen md:w-auto flex-1 justify-between md:justify-start py-2 md:py-0 shadow-dark md:shadow-none md:space-y-5">
         
          {
              DashboardSidebarItems.map((item, index) => {

                 return  <DashboardSidebarItem
                      key={index}  
                      active={pathname === item.route ? true:false}               
                      name={item.name}
                      icon={item.icon}
                      route={item.route}
                  />
              })
              }
        </ul>
      </div>
      <div className="hidden md:flex mt-20 space-x-4 items-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400  hover:text-pink-600 transition duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </div>
        <div
          to="#"
          onClick={()=> handleLogout()}
          className="block font-semibold cursor-pointer text-gray-500 hover:text-pink-600 transition duration-200"
        >
          Logout
        </div>
      </div>
    </div>
  );
}

export default DashboardSidebar;

