import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Label from "../../../components/Label";

function AuthTemplate(props) {
    return (
      <section className="text-gray-600 body-font lg:w-9/12 z-10">
        <div className="container w-10/12 px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-5xl text-white">
              Welcome to PayUP
            </h1>
            <p className="leading-relaxed mt-4">
              {props.subtitle}
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 shadow-lg">
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