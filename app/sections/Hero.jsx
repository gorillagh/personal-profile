"use client";
import React from "react";
import Image from "next/image";
import hero1 from "../../public/KN3.png";

const Hero = () => {
  return (
    <div className="container md:w-4/5 lg:px-20">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="flex items-center justify-center ">
          <Image
            src={hero1}
            alt="Hero"
            className="h-auto w-full max-w-lg lg:max-w-none"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 text-center lg:items-start  lg:gap-6  lg:text-left">
          <h4 className="text-3xl font-bold text-gray-700 sm:text-4xl md:text-5xl">
            I’m
          </h4>
          <h1 className="text-4xl font-bold text-accent sm:text-5xl md:text-6xl lg:text-7xl">
            Kabu <br /> Nartey
          </h1>

          <p className="text-sm font-bold text-gray-700 sm:text-xl md:text-2xl">
            Leadership<span className="mx-2 text-accent"> | </span>
            Law<span className="mx-2 text-accent"> | </span>
            Communications
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
