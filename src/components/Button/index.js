import { Link } from "react-router-dom";

function Button(props) {
    return (
      <button 
      type={props.type}
      onClick={props.onClick} 
      className="text-white w-full bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg capitalize">
        {props.title}
      </button>
    );
  }

  function ButtonSm(props) {
    return (
      <button 
      type={props.type}
      onClick={props.onClick} 
      className="text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-sm capitalize">
        {props.title}
      </button>
    );
  }

  function ButtonLink(props) {
    return (
      <Link to={props.to} className="text-white text-center bg-pink-500 border-0 py-2 px-4 focus:outline-none hover:bg-pink-600 rounded text-sm capitalize">
        {props.title}
      </Link>
    );
  }


  export  {Button, ButtonLink, ButtonSm}