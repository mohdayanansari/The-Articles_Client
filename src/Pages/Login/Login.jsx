import { AtSymbolIcon, LockClosedIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import loginimg from "../../Assets/loginimg.svg"

const Login = () => {
  return (
    <>
       <section className="flex w-full justify-center items-center pt-20 h-screen bg-gray-50">
        <div className="w-4/5 shadow-xl p-10 phone-padding  rounded-3xl border border-gray-50 bg-white">
          <div>
            <h1 className="text-black text-opacity-75 font-bold text-4xl mb-5">
              Login
            </h1>
            <div className="w-full grid lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1">
              {/* col-1 */}
              <div className="">
                <form className="flex flex-col gap-5">
                  
                  {/* Email Field */}
                  <div>
                    <span className="relative">
                      <AtSymbolIcon className="absolute w-6 h-6 top-0 left-2 text-black text-opacity-50 " />
                    </span>

                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email..."
                      id="email"
                      autoComplete="off"
                      className="pl-10 border-none shadow rounded-lg text-base focus:ring-2 w-full focus:ring-red-400 border border-gray-50 placeholder-opacity-30 placeholder-black"
                    />
                  </div>
                  {/* Password Field */}
                  <div>
                    <span className="relative">
                      <LockClosedIcon className="absolute w-6 h-6 top-0 left-2 text-black text-opacity-50" />
                    </span>

                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your password..."
                      id="password"
                      autoComplete="off"
                      className="pl-10 border-none shadow rounded-lg text-base focus:ring-2 w-full focus:ring-red-400 border border-gray-50 placeholder-opacity-30 placeholder-black"
                    />
                  </div>
                 

                  <div className="w-full">
                    <input
                      type="submit"
                      value="LOGIN"
                      name="signin"
                      id="signin"
                      className="bg-gradient-to-tr from-red-500 to-yellow-400 text-lg font-semibold text-white  w-2/6 py-3 rounded-2xl shadow-md tracking-wider"
                    />
                  </div>
                </form>
              </div>
              {/* col-2 */}
              <div className="flex flex-col w-full gap-10">
                <figure className="w-full flex justify-center items-center hide">
                  <img src={loginimg} alt="signup" className="w-96" />
                </figure>

                <div className="flex w-full justify-center  marginTop">
                  <Link to="/signup">Don't have an account? Signup</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
