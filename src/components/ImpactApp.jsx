import React from "react";

function ImpactApp() {
  return (
    <div className="w-full h-full">
      <div className=" py-5 px-5">
        <h2 className="text-xs flex items-center gap-2">
          <span className="text-xl">🧠</span>Brainstorming
        </h2>
        <h1 className="text-xs">
          I build impactful mobile app.
          <span className="text-3xl font-bold">🌳</span>
        </h1>
        <div className=" flex items-center gap-2">
          <span className="text-xs"> Active users</span>
          <b className="md:text-2xl font-extrabold">2.5M🔥</b>
        </div>
      </div>
    </div>
  );
}

export default ImpactApp;
