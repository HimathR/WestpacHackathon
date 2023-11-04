"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { InsightCard, TitleText } from "../components";

export const features = [
  {
    imgUrl: "/roosavings.png",
    title: "Savings Dashboard",
    url: "/dashboard",
    subtitle:
      "Track your savings, set goals, and view your W coins tally at a glance. Your financial journey, simplified and gamified.",
  },
  {
    imgUrl: "/roochat.png",
    title: "RooChat",
    url: "/chatbot",
    subtitle:
      "Chat with Bucky, and get personalized banking assistance anytime, anywhere. Making banking chatter clear, friendly, and tailored to you.",
  },
  {
    imgUrl: "/roogames.png",
    title: "Games",
    url: "/games",
    subtitle:
      "Engage in fun games to earn more W coins. Each play brings you closer to your savings goals in an enjoyable way.",
  },
];

const Features = () => (
  <section className={`${styles.paddings}  relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TitleText title={<>Features</>} textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {features.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Features;
