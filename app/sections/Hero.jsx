"use client";
import React from "react";
import Image from "next/image";
import hero1 from "../../public/Kabu2.png";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 lg:p-2">
      <div className="flex justify-center items-center">
        <Image
          src={hero1}
          alt="Hero"
          className="w-full h-auto max-w-lg lg:max-w-none"
        />
      </div>
      <div className="flex flex-col justify-center items-center lg:items-start gap-4 lg:gap-6 text-center lg:text-left">
        <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700">
          I’m
        </h4>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#B37E4C]">
          Kabu <br /> Nartey
        </h1>

        <p className="text-sm sm:text-xl md:text-2xl font-bold text-gray-700">
          Leadership<span className="text-[#B37E4C] mx-2"> | </span>
          Law<span className="text-[#B37E4C] mx-2"> | </span>
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
