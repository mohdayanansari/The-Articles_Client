import { PencilAltIcon } from "@heroicons/react/solid";
import { Tab } from "@headlessui/react";
import dp from "../../Assets/img/img.jpg";

const About = () => {
  return (
    <>
      <section className="flex items-center justify-center w-full h-screen px-2 pt-20 lg:px-0 xl:px-0 bg-gray-50 my-font">
        <div className="grid w-full grid-cols-1 p-3 bg-white border shadow lg:gap-5 rounded-2xl border-gray-50 xl:grid-cols-6 lg:grid-cols-6 xl:w-4/5 lg:w-4/5">
          {/* col-1 */}
          <div className="flex gap-4 lg:col-span-1 xl:block lg:block sm:mb-2">
            {/* img container */}
            <div className="relative ">
              <img
                src={dp}
                alt="profile"
                className="object-cover w-full mb-4 border shadow-lg ring ring-red-400 ring-offset-2 rounded-2xl h-60"
              />
              <PencilAltIcon className="absolute w-8 h-8 text-white bottom-8 lg:bottom-2 right-1" />
            </div>
            {/* details container */}
            <div className="text-base font-semibold text-gray-500">
              <p>Youtuber</p>
              <p>Youtuber</p>
              <p>Youtuber</p>
              <p>Youtuber</p>
              <p>Youtuber</p>
              <p>Youtuber</p>
            </div>
          </div>
          {/* col-2 */}
          <div className=" lg:col-span-5">
            <div className="flex items-center justify-between w-full ">
              <h1 className="text-3xl ">Ayan Ansari</h1>
              <button>Edit Profile</button>
            </div>

            <p className="text-lg text-red-500">Web Developer</p>
            <p className="mt-3">
              <span className="text-xs font-bold text-gray-500 ">
                RANKINGS :
              </span>
              1/10
            </p>
            {/* tab section */}
            <br />
            <Tab.Group defaultIndex={0} >
              <Tab.List className="flex items-center gap-5 text-2xl font-bold border-b ">
                <Tab
                  className={({ selected }) =>
                    selected
                      ? `border-b-2 font-bold text-red-500 border-red-500 outline-none focus:outline-none`
                      : `text-black text-opacity-30 font-bold`
                  }
                >
                  About
                </Tab>
                <Tab
                  className={({ selected }) =>
                    selected
                      ? `border-b-2 font-bold text-red-500 border-red-500 outline-none focus:outline-none`
                      : `text-black text-opacity-30 font-bold`
                  }
                >
                  Timeline
                </Tab>
              </Tab.List>
              <Tab.Panels className="pt-3">
                <Tab.Panel>
                  <div className="flex flex-col w-full gap-2">
                    <div className="flex justify-between lg:w-2/5">
                      <p className="font-bold">User Id</p>
                      <p>7874546646346546</p>
                    </div>
                    <div className="flex justify-between lg:w-2/5">
                      <p className="font-bold">Name</p>
                      <p>Ayan Ansari</p>
                    </div>
                    <div className="flex justify-between lg:w-2/5">
                      <p className="font-bold">Email</p>
                      <p>ayan@gmail.com</p>
                    </div>
                    <div className="flex justify-between lg:w-2/5">
                      <p className="font-bold">Phone Number</p>
                      <p>+91 8502258515</p>
                    </div>
                    <div className="flex justify-between lg:w-2/5">
                      <p className="font-bold">Profession</p>
                      <p>Student</p>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                <div className="flex flex-col w-full gap-2">
                    <div className="flex flex-col justify-between ">
                      <p className="font-bold">Experience</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, natus.</p>
                    </div>
                    <div className="flex flex-col justify-between lg:w-2/5">
                      <p className="font-bold">Hourly Rate</p>
                      <p>Ayan Ansari</p>
                    </div>
                    <div className="flex flex-col justify-between lg:w-2/5">
                      <p className="font-bold">Total projects</p>
                      <p>ayan@gmail.com</p>
                    </div>
                    <div className="flex flex-col justify-between lg:w-2/5">
                      <p className="font-bold">English Level</p>
                      <p>+91 8502258515</p>
                    </div>
                    <div className="flex flex-col justify-between lg:w-2/5">
                      <p className="font-bold">Availability</p>
                      <p>Student</p>
                    </div>
                    <div className="flex flex-col justify-between lg:w-2/5">
                      <p className="font-bold">Bio</p>
                      <p>Student</p>
                    </div>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
