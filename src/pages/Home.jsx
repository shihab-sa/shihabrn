import React from "react";
import { cssGridData } from "../data";

export default function Home() {
  const sStyleCss = `bg-neutral-100 border-2 rounded-xl flex flex-col items-center justify-center`;
  return (
    <div className="grid md:grid-cols-3 auto-rows-[250px] gap-4 my-4">
      {cssGridData.map((items, i) => {
        return (
          <div
            key={i}
            className={`${sStyleCss} ${
              i === 3 || i === 6 ? "md:col-span-2" : ""
            }`}
          >
            <h2 className=" text-xl text-gray-600">{items.title}</h2>
            <p className=" font-bold text-xl">{items.name}</p>
          </div>
        );
      })}
    </div>
  );
}
