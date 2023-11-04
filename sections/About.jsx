"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title="Hop into the Future of Banking"
        textStyles="text-center"
      />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-body"
      >
        Embark on a delightful savings journey with
        <span className="font-extrabold text-westpac-red">
          {" "}
          Westpac RooRewards.{" "}
        </span>{" "}
        Our friendly kangaroo{" "}
        <span className="font-extrabold text-westpac-red">Bucky</span> is here
        to make every hop towards your financial goals fun and rewarding. Ready
        to <span className="font-extrabold text-westpac-red">jumpstart</span>{" "}
        your savings adventure?
      </motion.p>
    </motion.div>
  </section>
);

export default About;
