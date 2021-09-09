import { Link } from "react-router-dom";
import DashboardSidebarItems from "./DashboardSidebarItems";
import DashboardSidebarItem from "./DashboardSidebarItem";



function DashboardSidebar() {
  return (
    <div className="py-12 px-10 w-2/12">
      <div className="flex space-2 items-center border-b-2 pb-4">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14 text-pink-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="ml-3">
          <h1 className="text-3xl font-bold text-pink-600">payUP</h1>
          <p className="text-center text-sm text-pink-600 mt-1 font-serif">
            Track your loans{" "}
          </p>
        </div>
      </div>

      <div className="mt-8">
        <ul className="space-y-5">
         
          {
              DashboardSidebarItems.map((item, index) => {

                 return  <DashboardSidebarItem
                      key={index}                 
                      name={item.name}
                      icon={item.icon}
                      route={item.route}
                  />
              })
              }
        </ul>
      </div>
      <div className="flex mt-20 space-x-4 items-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400 hover:text-pink-600 transition duration-200"
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
        <Link
          to="/login"
          className="block font-semibold text-gray-500 hover:text-pink-600 transition duration-200"
        >
          Logout
        </Link>
      </div>
    </div>
  );
}

export default DashboardSidebar;
