import Avatar from "../components/Avatar";
import My from "../components/My";

function Home() {
  return (
    <div className="mt-24 mb-24 flex flex-col items-center ml-5 mr-5">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
        <Avatar />
        <div className="text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold">Shihab Ahmed</h1>
          <h1 className="text-lg sm:text-xl font-semibold">
            React Native Experts
          </h1>
        </div>
      </div>

      <div className="mt-5">
        {/* <MySweper />
        <RadialProgress /> */}
        <My />
      </div>
      <button className="btn btn-outline btn-info mt-5 w-full sm:w-[45%]">
        Download CV
      </button>

      <p className="mt-5 w-full sm:w-[45%] text-center sm:text-left">
        I'm Evan Bacon, an artist and technologist. I'm currently building Expo
        Router, the universal React framework. I started working on the Expo
        project in 2017 with the goal to make mobile experiences easy to create,
        share, and discover.
      </p>

      <button className="btn btn-outline btn-info mt-5 w-full sm:w-[45%]">
        Go to More Web Front End Projects
      </button>
    </div>
  );
}

export default Home;
