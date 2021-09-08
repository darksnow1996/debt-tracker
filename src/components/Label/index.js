function Label(props) {
    return (
      <label for="full-name" className="leading-7 text-sm text-gray-600">
        {props.title}
      </label>
    );
  }

  export default Label