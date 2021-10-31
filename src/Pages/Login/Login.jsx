import React, { useContext, useState } from "react";
import { AtSymbolIcon, LockClosedIcon } from "@heroicons/react/solid";
import { Link, useHistory } from "react-router-dom";
import loginimg from "../../Assets/loginimg.svg";
import { UserContext } from "../../App";

const Login = () => {
  // use context
  const { state, dispatch } = useContext(UserContext);

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      dispatch({ type: "USER", payload: true });
      window.alert("Login Successfull");
      history.push("/");
    }
  };

  return (
    <>
      <section className="flex items-center justify-center w-full h-screen pt-20 bg-gray-50">
        <div className="w-4/5 p-10 bg-white border shadow-xl phone-padding rounded-3xl border-gray-50">
          <div>
            <h1 className="mb-5 text-4xl font-bold text-black text-opacity-75">
              Login
            </h1>
            <div className="grid w-full lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1">
              {/* col-1 */}
              <div className="">
                <form method="POST" className="flex flex-col gap-5">
                  {/* Email Field */}
                  <div>
                    <span className="relative">
                      <AtSymbolIcon className="absolute top-0 w-6 h-6 text-black text-opacity-50 left-2 " />
                    </span>

                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email..."
                      id="email"
                      autoComplete="off"
                      className="w-full pl-10 text-base placeholder-black border border-none rounded-lg shadow focus:ring-2 focus:ring-red-400 border-gray-50 placeholder-opacity-30"
                    />
                  </div>
                  {/* Password Field */}
                  <div>
                    <span className="relative">
                      <LockClosedIcon className="absolute top-0 w-6 h-6 text-black text-opacity-50 left-2" />
                    </span>

                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password..."
                      id="password"
                      autoComplete="off"
                      className="w-full pl-10 text-base placeholder-black border border-none rounded-lg shadow focus:ring-2 focus:ring-red-400 border-gray-50 placeholder-opacity-30"
                    />
                  </div>

                  <div className="w-full">
                    <input
                      type="submit"
                      value="LOGIN"
                      name="signin"
                      onClick={loginUser}
                      id="signin"
                      className="w-2/6 py-3 text-lg font-semibold tracking-wider text-white shadow-md bg-gradient-to-tr from-red-500 to-yellow-400 rounded-2xl"
                    />
                  </div>
                </form>
              </div>
              {/* col-2 */}
              <div className="flex flex-col w-full gap-10">
                <figure className="flex items-center justify-center w-full hide">
                  <img src={loginimg} alt="signup" className="w-96" />
                </figure>

                <div className="flex justify-center w-full marginTop">
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
