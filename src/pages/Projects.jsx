import { Link } from "react-router-dom";
import { projectData } from "../data";
function Projects() {
  return (
    <div className="md:ml-56 p-10">
      <h1 className=" md:text-3xl font-bold mt-10">
        List of Apps [iOs & Android]<span className=" text-4xl">🌳</span>
      </h1>
      <p className=" mt-5">
        Hire your expert mobile app software engineer. I build impactful mobile
        apps
      </p>

      <div className="mt-10">
        {projectData.map((items, i) => {
          return (
            <div key={i} className="flex justify-center items-center py-5 mt-5">
              <Link
                to={`/projects/${i}`}
                className=" bg-black py-5 px-5 rounded-xl border-b-2 cursor-pointer md:hover:bg-gray-700"
              >
                <div className="flex gap-16">
                  <div>
                    <h1 className="text-xl font-extrabold">{items.title}</h1>
                    <p className="text-xs">{items.paragraph}</p>
                  </div>
                  <span className=" text-5xl">{items.emojiApp}</span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
