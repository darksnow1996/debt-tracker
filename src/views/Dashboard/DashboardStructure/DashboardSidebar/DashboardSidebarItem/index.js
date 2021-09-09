import { Link } from "react-router-dom";


function DashboardSidebarItem(props) {
    return (
      <li className="p-2 hover:bg-pink-600 text-gray-500 hover:text-white rounded-md">
        <Link
          to={props.route}
          className="flex items-center text-sm font-semicolon font-semibold  transition duration-200"
        >
        {props.icon}
          
          {props.name}
        </Link>
      </li>
    );
  }

  export default DashboardSidebarItem