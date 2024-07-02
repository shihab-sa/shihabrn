import CvDownload from "./CvDownload";
import Shihab from "../assets/imeges/bgboss.jpg";

function Avatar() {
  return (
    <div className="bg-gradient-to-r from-rose-400 to-red-500 w-full h-full rounded-xl flex items-center justify-center">
      <div className="flex justify-center items-center">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={Shihab} alt="" />
          </div>
        </div>
        <div className="ml-10">
          <h1 className="md:text-3xl font-extrabold">Shihab Ahmed</h1>
          <h2 className="text-xm">React Native</h2>
          <CvDownload />
        </div>
      </div>
    </div>
  );
}

export default Avatar;
