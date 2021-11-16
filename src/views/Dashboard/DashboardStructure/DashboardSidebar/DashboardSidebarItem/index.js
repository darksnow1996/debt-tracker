import { Link } from "react-router-dom";


function DashboardSidebarItem(props) {
    return (
      <li className={"p-2 " + `${props.active ? 'text-white rounded-md bg-pink-500':'hover:bg-pink-500 rounded-md  hover:text-white text-gray-500'}`}>
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