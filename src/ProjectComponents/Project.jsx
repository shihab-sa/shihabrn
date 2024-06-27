import { useParams } from "react-router-dom";
import { projectData } from "../data";
import CommonProject from "./CommonProject";

function Project() {
  const { id } = useParams();
  const project = projectData.find((project) => project.id === id);
  console.log("the data is", project);
  if (!project) {
    return <div>!Not Found</div>;
  }

  return <CommonProject {...project} />;
}

export default Project;
