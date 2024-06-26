import imgProject from "../assets/imeges/proone.png";
import { ArrowLeft } from "lucide-react";
function CommonProject() {
  return (
    <div>
      <div className="cursor-pointer flex gap-5">
        <ArrowLeft size={30} /> Go Back
      </div>
      <h1 className="text-2xl font-extrabold mt-5">
        Wifi Blocker App <span className=" text-5xl">💡</span>
      </h1>
      <img src={imgProject} alt="" className=" mt-16 rounded-xl" />
      <p className=" mt-16">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved
      </p>
      <button className="btn btn-wide mt-10">Go To App Store</button>
    </div>
  );
}

export default CommonProject;
