import React from "react";
import { cssGridData } from "../data";
import Avatar from "../components/Avatar";

export default function Home() {
  const sStyleCss = `border-2 rounded-xl flex flex-col items-center justify-center`;
  return (
    <div className="md:ml-56 grid md:grid-cols-3 auto-rows-[200px] gap-1 mr-2 py-2">
      {cssGridData.map((items, i) => {
        return (
          <div
            key={i}
            className={`${sStyleCss} ${
              i === 0 || i === 6 ? "md:col-span-2" : ""
            }`}
          >
            {/* <h2 className="text-xl text-gray-600">{items.title}</h2>
            <p className="font-bold text-xl">{items.name}</p> */}
            {i === 0 && <Avatar />}
          </div>
        );
      })}
    </div>
  );
}
