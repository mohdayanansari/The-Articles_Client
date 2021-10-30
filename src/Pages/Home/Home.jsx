const Home = () => {
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
                How are you
              </div>
              <div className="text-3xl font-bold text-white lg:text-8xl xl:text-8xl">
                Ayan Ansari
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
