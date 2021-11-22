import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Label from "../../../components/Label";

function AuthTemplate(props) {
    return (
      <section className="text-gray-600 body-font lg:w-9/12 z-10">
        <div className="container w-full px-5 md:px-24 md:py-24 mx-auto flex flex-row flex-wrap items-center">
          <div className="lg:w-3/5 w-full text-center md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-bold text-xl md:text-2xl lg:text-5xl text-white">
              Welcome to pay<span className="text-pink-600">UP</span>
            </h1>
            <p className="leading-relaxed hidden md:visible mt-4 text-gray-600 md:text-xl  lg:text-2xl">
              {props.subtitle}
            </p>
          </div>
          <div className="w-full md:w-1/2  lg:w-2/6 bg-white rounded-lg p-8 flex flex-col md:ml-auto mt-10 md:mt-0 shadow-lg">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              {props.formtitle}
            </h2>
            
           {props.children}
            <p className="text-xs text-center text-gray-500 mt-3">
              {props.formSubtitle}
            </p>
          </div>
        </div>
      </section>
    );
  }

  export default AuthTemplate