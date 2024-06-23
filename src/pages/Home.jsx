import React from "react";
import { cssGridData } from "../data";
import Avatar from "../components/Avatar";
import BioText from "../components/BioText";
import SocalMedia from "../components/SocalMedia";

export default function Home() {
  const sStyleCss = `border-2 rounded-xl flex flex-col items-center justify-center`;
  return (
    <div className="md:ml-56 grid md:grid-cols-3 auto-rows-[200px] gap-1 mr-2 py-2 ">
      {cssGridData.map((items, i) => {
        return (
          <div
            key={i}
            className={`${sStyleCss} ${
              i === 0 || i === 6 ? "md:col-span-2" : ""
            }`}
          >
            {i === 0 && <Avatar />}
            <div className="">{i === 2 && <BioText />}</div>
            {i === 1 && <SocalMedia />}
          </div>
        );
      })}
    </div>
  );
}
