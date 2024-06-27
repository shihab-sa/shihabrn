import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function CommonProject({ title, imgSrc, description, buttonText }) {
  const navigate = useNavigate();
  console.log("Props:", { title, description, imgSrc, buttonText });
  return (
    <div className="md:ml-56">
      <div className="md:ml-20 md:mr-20 px-5  py-20">
        <div className="cursor-pointer flex gap-5" onClick={() => navigate(-1)}>
          <ArrowLeft size={30} /> Go Back
        </div>
        <div>
          <h1 className=" text-xl font-bold mt-5">{title}</h1>
          <img src={imgSrc} alt="" className=" mt-16 rounded-xl" />
          <p className=" mt-16">{description}</p>
          <button className="btn btn-wide mt-10">{buttonText}</button>
        </div>
      </div>
    </div>
  );
}

export default CommonProject;
