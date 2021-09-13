function Input({type, name="", placeholder= "",required = false}) {
    return (
      <input
        type={type}
        id="full-name"
        name={name}
        className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder={placeholder}
       required={required}
      />
    );
  }

  export default Input