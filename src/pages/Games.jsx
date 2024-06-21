import React from "react";
import img1 from "../assets/imeges/logo3.png";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

export default function Games() {
  return (
    <div>
      <h1 className=" mt-20 ml-20 mr-20 text-4xl font-extrabold">Games</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-20 mr-20 mt-10">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}

const Cards = () => {
  return (
    <Card isFooterBlurred radius="lg" className="border-none">
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={250}
        src={img1}
        width={250}
      />
      <CardFooter className="justify-between bg-violet-800 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Available soon.</p>
        <Button
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
        >
          App Store
        </Button>
      </CardFooter>
    </Card>
  );
};
