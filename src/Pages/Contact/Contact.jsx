import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import addressimg from "../../Assets/img/address.svg";
import emailimg from "../../Assets/img/emailimg.svg";
import phoneimg from "../../Assets/img/phone.svg";

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const userContact = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      // console.log(data);
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userContact();
  }, []);

  // Storing contact form data in state
  const handleInput = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // Send the data to the backend
  const contactForm = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = userData;
    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });

    const data = await res.json();

    if(!data){
      console.log("message not sent");
    }else{
      alert("Message Sent! 🚀");

      setUserData({...userData, message:""})
    }
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center w-full h-screen gap-5 pt-20 bg-gray-50">
        {/* Card Section */}
        <div className="grid w-4/5 gap-5 lg:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1 ">
          {/* col-1 */}
          <div className="flex items-center gap-5 p-2 bg-white border shadow-md rounded-2xl border-gray-50">
            <figure>
              <img src={phoneimg} alt="phone" className="w-20 " />
            </figure>
            <div>
              <h1 className="mb-1 text-xl font-bold text-black text-opacity-80">
                Phone
              </h1>
              <p className="text-black text-opacity-50">+91 63949152456</p>
            </div>
          </div>
          {/* col-2 */}
          <div className="flex items-center gap-5 p-2 bg-white border shadow-md rounded-2xl border-gray-50">
            <figure>
              <img src={emailimg} alt="email" className="w-20" />
            </figure>
            <div>
              <h1 className="mb-1 text-xl font-bold text-black text-opacity-80">
                Email
              </h1>
              <p className="text-black text-opacity-50">contact@gmail.com</p>
            </div>
          </div>
          {/* col-3 */}
          <div className="flex items-center gap-5 p-2 bg-white border shadow-md rounded-2xl border-gray-50">
            <figure>
              <img src={addressimg} alt="address" className="w-20" />
            </figure>
            <div>
              <h1 className="mb-1 text-xl font-bold text-black text-opacity-80">
                Address
              </h1>
              <p className="text-black text-opacity-50">U.P, India</p>
            </div>
          </div>
        </div>
        {/* Card Section ENDDD*/}

        {/* form */}
        <div className="p-10 bg-white shadow-xl lg:w-2/3 xl:w-2/3 rounded-2xl">
          <h1 className="mb-5 text-4xl">Get in Touch</h1>
          <form method="POST" className="" id="contact_form">
            <div className="grid gap-5 lg:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1">
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleInput}
                placeholder="Your Name..."
                id="contact_form_name"
                required="true"
                autoComplete="off"
                className="w-full pl-10 text-base placeholder-black border border-none rounded-lg shadow focus:ring-2 focus:ring-red-400 border-gray-50 placeholder-opacity-30"
              />
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInput}
                placeholder="Your Email..."
                id="contact_form_email"
                required="true"
                autoComplete="off"
                className="w-full pl-10 text-base placeholder-black border border-none rounded-lg shadow focus:ring-2 focus:ring-red-400 border-gray-50 placeholder-opacity-30"
              />
              <input
                type="number"
                name="phone"
                value={userData.phone}
                onChange={handleInput}
                placeholder="Your Phone Number..."
                id="contact_form_phone"
                required="true"
                autoComplete="off"
                className="w-full pl-10 text-base placeholder-black border border-none rounded-lg shadow focus:ring-2 focus:ring-red-400 border-gray-50 placeholder-opacity-30"
              />
            </div>
            <textarea
              value={userData.message}
              onChange={handleInput}
              name="message"
              id=""
              cols="30"
              rows="5"
              placeholder="Enter you message... "
              className="w-full pl-10 mt-4 text-base placeholder-black border border-none rounded-lg shadow focus:ring-2 focus:ring-red-400 border-gray-50 placeholder-opacity-30"
            ></textarea>

            <button
              type="submit"
              onClick={contactForm}
              className="px-2 py-3 mt-4 text-lg font-semibold tracking-wider text-white shadow-md bg-gradient-to-tr from-red-500 to-yellow-400 lg:w-2/6 rounded-2xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
