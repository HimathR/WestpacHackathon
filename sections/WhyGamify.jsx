"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { TypingText } from "../components";
import { planetVariants, staggerContainer, fadeIn } from "../utils/motion";

const WhyGamify = () => (
  <section className={`${styles.paddings} relative z-10 bg-white`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="Why Gamify?" />

        <div className="mt-[8px] md:text-[24px] text-[24px] text-body text-justify ${textStyles}">
          {" "}
          RooRewards brings a playful twist to saving, turning every dollar
          saved and goal reached into a fun endeavor with our kangaroo
          companion. Engaging games, challenges, and 'W' coins not only make
          saving enjoyable but also promote accountability on your financial
          journey. Dive into a rewarding adventure where serious savings meet
          playful engagements!
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants("right")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/whygamify.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhyGamify;
