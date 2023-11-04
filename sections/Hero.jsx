"use client";

import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <section className="relative flex w-full">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="flex w-full"
    >
      {/* Left 2/3 Section */}
      <div className="w-3/4 bg-westpac-red px-4 md:pl-24 lg:pl-48 py-8 flex flex-col justify-start items-start">
        <motion.h1
          variants={textVariant(1.1)}
          className={`text-white font-bold text-4xl md:text-8xl lg:mt-12 leading-tight`}
        >
          WESTPAC SAVINGS PLATFORM
        </motion.h1>
        <motion.h2
          variants={textVariant(1.05)}
          className={`text-white mt-4 text-2xl md:text-5xl lg:pt-4`}
        >
          Celebrating your savings Ws
        </motion.h2>
      </div>

      {/* Right 1/3 Section */}
      <div className="w-1/4 bg-white-background p-4 relative">
        <motion.img
          src="/cover.png"
          alt="hero_cover"
          variants={slideIn("right", "tween", 0.2, 1)}
          className="w-full h-full object-contain"
        />
      </div>
    </motion.div>
  </section>
);

export default Hero;
