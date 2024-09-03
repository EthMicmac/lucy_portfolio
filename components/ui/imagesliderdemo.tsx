"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";
import { FaArrowRight } from "react-icons/fa6";
import { HoverCardDemo } from "./hoverCardDemo";

export function ImagesSliderDemo() {
  const images = ["/catalinas.jpg", "/london.jpg", "/ky.jpg"];

  const names = ["Natchez", "Compton", "Montana", "Atlanta"];

  return (
    <ImagesSlider
      className="h-[40rem] flex flex-row relative w-full"
      images={images}
    >
      {/* Container for HoverCardDemo components */}

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col h-full justify-center flex-grow relative ml-4"
      >
        <div className="flex flex-col justify-center items-center">
          <motion.p className="font-serif text-4xl md:text-6xl bg-clip-text text-transparent text-white pt-10 z-40">
            Lucy Brewer
          </motion.p>
        </div>
        <div className="absolute inset-y-0 left-0 flex flex-col justify-center space-y-10 font-sans z-40">
          {names.map((name) => (
            <HoverCardDemo name={name} />
          ))}
        </div>
        <p className="flex flex-row items-center justify-center font-serif italic pt-1 z-40">
          Atlanta / Las Catalinas / London
        </p>
        <p className="flex flex-row items-center justify-center font-serif tracking-widest pt-1 z-40">
          Photography
        </p>
        {/* Spacer to push the button down */}
        <div className="flex-grow"></div>
        {/* Button at the Bottom */}
        <div className="flex justify-center pb-8">
          <button className="px-6 pb-10 text-white font-serif font-semibold rounded-lg transform hover:translate-x-1 transition duration-400 flex items-center z-40">
            <a href="#projects" className="flex items-center">
              See my work <FaArrowRight className="ml-1.5" />
            </a>
          </button>
        </div>
      </motion.div>
    </ImagesSlider>
  );
}
