import { useEffect, useState } from "react";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false);
  const userHomepage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      // console.log(data);
      setUserName(data.name);
      setShow(true);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userHomepage();
  }, []);


  return (
    <>
      <section className="flex flex-col items-center justify-center w-full h-screen gap-5 bg-gray-50 my-font">
        <div className="grid w-full grid-cols-2">
          <div className="flex items-center justify-end w-full h-screen bg-gradient-to-r from-red-500 to-yellow-300">
            <div className="flex flex-col items-start w-full pl-5 ">
              <div className="text-xl font-bold text-black lg:text-2xl xl:text-2xl text-opacity-60">
                Welcome to
              </div>
              <div className="text-3xl font-bold text-black lg:text-8xl xl:text-8xl text-opacity-60">
                The Articles
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start w-full h-screen bg-gradient-to-l from-red-500 to-yellow-300">
            <div className="flex flex-col items-end w-full pr-5 ">
              <div className="text-xl font-bold text-white text-opacity-60 lg:text-2xl xl:text-2xl">
               {show ? "Hey👋," : "" }
              </div>
              <div className="text-3xl font-bold text-white lg:text-8xl xl:text-8xl">
                {userName}
              </div>
              <div className="text-sm font-light text-white text-opacity-60 lg:text-2xl xl:text-2xl">
               {show ? "Happy to see you back!" : "" }
              </div>
            </div>
            {/* Image Col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
