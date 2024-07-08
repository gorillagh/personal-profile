"use client";
import React from "react";
import Image from "next/image";
import hero1 from "../../public/Kabu2.png";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 gap-6 p-4 lg:grid-cols-2  lg:p-2">
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
        {/* <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700">
          <Typewriter
            options={{
              strings: [
                "<span className='text-lg sm:text-xl md:text-2xl font-bold text-gray-700'>Leadership</span>",
                "<span>Law</span>",
                "<span>Communications</span>",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </p> */}
      </div>
    </div>
  );
};

export default Hero;
