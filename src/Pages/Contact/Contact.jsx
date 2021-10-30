import addressimg from "../../Assets/img/address.svg";
import emailimg from "../../Assets/img/emailimg.svg";
import phoneimg from "../../Assets/img/phone.svg";

const Contact = () => {
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
          <form className="" id="contact_form">
            <div className="grid gap-5 lg:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1">
              <input
                type="text"
                name="name"
                placeholder="Your Name..."
                id="contact_form_name"
                required="true"
                autoComplete="off"
                className="w-full pl-10 text-base placeholder-black border border-none rounded-lg shadow focus:ring-2 focus:ring-red-400 border-gray-50 placeholder-opacity-30"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email..."
                id="contact_form_email"
                required="true"
                autoComplete="off"
                className="w-full pl-10 text-base placeholder-black border border-none rounded-lg shadow focus:ring-2 focus:ring-red-400 border-gray-50 placeholder-opacity-30"
              />
              <input
                type="number"
                name="phone"
                placeholder="Your Phone Number..."
                id="contact_form_phone"
                required="true"
                autoComplete="off"
                className="w-full pl-10 text-base placeholder-black border border-none rounded-lg shadow focus:ring-2 focus:ring-red-400 border-gray-50 placeholder-opacity-30"
              />
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Enter you message... "
              className="w-full pl-10 mt-4 text-base placeholder-black border border-none rounded-lg shadow focus:ring-2 focus:ring-red-400 border-gray-50 placeholder-opacity-30"
            ></textarea>

            <button
              type="submit"
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
