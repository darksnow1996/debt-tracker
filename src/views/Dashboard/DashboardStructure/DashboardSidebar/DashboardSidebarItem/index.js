import { Link } from "react-router-dom";


function DashboardSidebarItem(props) {
    return (
      <li className={"flex-1 md:flex-none md:p-2 " + `${props.active ? 'md:text-white md:rounded-md md:bg-pink-500':'md:hover:bg-pink-500 md:rounded-md  md:hover:text-white md:text-gray-500'}`}>
        <Link
          to={props.route}
          className="flex flex-col md:flex-row items-center md:text-sm md:font-semicolon md:font-semibold  transition duration-200"
        >
        {props.icon}
          
          {props.name}
        </Link>
      </li>
    );
  }

  export default DashboardSidebarItem


  