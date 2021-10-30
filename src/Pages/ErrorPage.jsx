import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center w-full h-screen gap-16 my-font bg-gray-50">
        <h1 className="text-4xl font-bold text-center text-black uppercase text-opacity-90">
          we are sorry, page not found
        </h1>
        <p className="px-5 font-semibold text-center text-black text-opacity-50">
          The page you are looking for might have been removed had its name
          changed or its temporarily unavailable{" "}
        </p>
        <Link to="/">
          <button className="px-10 py-4 text-xl font-bold text-white uppercase shadow-lg outline-none bg-gradient-to-tr from-red-500 to-yellow-400 rounded-2xl focus:outline-none focus:border-none">
            Back to home page
          </button>
        </Link>
      </section>
    </>
  );
};
export default ErrorPage;
