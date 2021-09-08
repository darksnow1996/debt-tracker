function Button(props) {
    return (
      <button className="text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg capitalize">
        {props.title}
      </button>
    );
  }


  export default Button