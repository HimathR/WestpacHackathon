"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    viewport={{ once: true, amount: 0.25 }}
    className={`font-normal text-[6vw] sm:text-[4vw] text-westpac-red mt-8  ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-heading ${textStyles}`}
  >
    {title}
  </motion.h2>
);
