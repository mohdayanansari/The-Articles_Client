import {
  AtSymbolIcon,
  BriefcaseIcon,
  DeviceMobileIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import { Link,  useHistory } from "react-router-dom";
import illus from "../../Assets/signup.svg";
import "../../styles/global.css";

const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInput = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  // !sending data to server
  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Ragistration");
    } else {
      window.alert("Register Successfull");
      console.log("Registration Successful");

      history.push("./login");
    }
  };

  return (
    <>
      <section className="flex items-center justify-center w-full h-screen pt-20 bg-gray-50">
        <div className="w-4/5 p-10 bg-white border shadow-xl phone-padding rounded-3xl border-gray-50">
          <div>
            <h1 className="mb-5 text-4xl font-bold text-black text-opacity-75">
              Signup
            </h1>
            <div className="grid w-full lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1">
              {/* col-1 */}
              <div className="">
                <form method="POST" className="flex flex-col gap-5">
                  {/* Input Field */}
                  <div>
                    <span className="relative">
                      <UserIcon className="absolute top-0 w-6 h-6 text-black text-opacity-50 left-2" />
                    </span>

                    <input
                      type="text"
                      name="name"
                      value={user.name}
                      onChange={handleInput}
                      placeholder="Your Name..."
                      id="name"
                      autoComplete="off"
                      className="w-full pl-10 text-base placeholder-black border border-none rounded-lg shadow focus:ring-2 focus:ring-red-400 border-gray-50 placeholder-opacity-30"
                    />
                  </div>
                  {/* Email Field */}
                  <div>
                    <span className="relative">
                      <AtSymbolIcon className="absolute top-0 w-6 h-6 text-black text-opacity-50 left-2 " />
                    </span>

                    <input
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="Your Email..."
                      id="email"
                      autoComplete="off"
                      className="w-full pl-10 text-base placeholder-black border border-none rounded-lg shadow focus:ring-2 focus:ring-red-400 border-gray-50 placeholder-opacity-30"
                    />
                  </div>
                  {/* Phone Field */}
                  <div>
                    <span className="relative">
                      <DeviceMobileIcon className="absolute top-0 w-6 h-6 text-black text-opacity-50 left-2" />
                    </span>

                    <input
                      type="text"
                      name="phone"
                      value={user.phone}
                      onChange={handleInput}
                      placeholder="Your Phone Number..."
                      id="phone"
                      autoComplete="off"
                      className="w-full pl-10 text-base placeholder-black border border-none rounded-lg shadow focus:ring-2 focus:ring-red-400 border-gray-50 placeholder-opacity-30"
                    />
                  </div>
                  {/* Work///Branch Field */}
                  <div>
                    <span className="relative">
                      <BriefcaseIcon className="absolute top-0 w-6 h-6 text-black text-opacity-50 left-2" />
                    </span>

                    <input
                      type="text"
                      name="work"
                      value={user.work}
                      onChange={handleInput}
                      placeholder="Your Work..."
                      id="work"
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
                      value={user.password}
                      onChange={handleInput}
                      placeholder="Enter your password..."
                      id="password"
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
                      name="cpassword"
                      value={user.cpassword}
                      onChange={handleInput}
                      placeholder="Confirm your password..."
                      id="cpassword"
                      autoComplete="off"
                      className="w-full pl-10 text-base placeholder-black border border-none rounded-lg shadow focus:ring-2 focus:ring-red-400 border-gray-50 placeholder-opacity-30"
                    />
                  </div>

                  <div className="w-full">
                    <input
                      type="submit"
                      value="register"
                      onClick={PostData}
                      name="register"
                      id="signup"
                      className="w-2/6 py-3 text-lg font-semibold tracking-wider text-white shadow-md bg-gradient-to-tr from-red-500 to-yellow-400 rounded-2xl"
                    />
                  </div>
                </form>
              </div>
              {/* col-2 */}
              <div className="flex flex-col w-full gap-10">
                <figure className="flex items-center justify-center w-full hide">
                  <img src={illus} alt="signup" className="w-96" />
                </figure>

                <div className="flex justify-center w-full marginTop">
                  <Link to="/login">Already Have an account? login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
