import imgs from "../assets/imeges/proone.png";

function Projects() {
  return (
    <div className="mt-20 mb-20 ml-3 mr-3">
      {/* mb-20 px-4 py-28 md:px-20 md:py-24 */}
      {/* Content section start  */}
      <div>
        <h1 className="text-xl md:text-2xl font-extrabold">
          Hire Your iOS & Android Experts Here 🔥
        </h1>
        <p className="mt-4 md:mt-5 text-sm md:text-base">
          I'm Evan Bacon, an artist and technologist. I'm currently building
          Expo Router, the universal React framework. I started working on the
          Expo project in 2017 with the goal to make mobile experiences easy to
          create, share, and discover.
        </p>
      </div>
      {/* Content section end  */}
      {/* project cart section start  */}
      <div className="mt-14 md:mt-28">
        <h1 className="text-xl md:text-2xl font-bold mt-5">Wifi Blocker</h1>
        <img
          src={imgs}
          alt="images"
          className="rounded-xl mt-5 w-full md:w-auto"
        />
      </div>
      {/* project cart section end  */}
      {/* technology using start  */}
      <div className="mt-5">
        <button className="btn btn-wide btn-primary">
          Go to Google Play Store
        </button>
      </div>
      {/* technology using end  */}
      {/* Project short description start  */}
      <p className="mt-5 text-sm md:text-base">
        I'm Evan Bacon, an artist and technologist. I'm currently building Expo
        Router, the universal React framework. I started working on the Expo
        project in 2017 with the goal to make mobile experiences easy to create,
        share, and discover.
      </p>
      {/* Project short description end  */}
    </div>
  );
}

export default Projects;
