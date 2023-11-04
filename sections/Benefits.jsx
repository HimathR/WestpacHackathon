"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from "../components";

const benefitsData = [
  {
    name: "W Coins",
    imgSrc: "/kanga-coin.png",
    stamp: "wcoin.png",
    description:
      "W coins are rewarded for savings wins, by playing games and reaching your savings goals. These coins are your ticket to more rewards, making every step of your financial journey enjoyable and fruitful.",
  },
  {
    name: "Reach Financial Goals",
    imgSrc: "/goal-icon.png",
    stamp: "goal.png",
    description:
      "Set, chase, and achieve your financial goals in a playful environment. With every goal reached, experience a sense of achievement and fun!",
  },
  {
    name: "Stay Accountable",
    imgSrc: "/accountable-icon.png",
    stamp: "accountable.png",
    description:
      "Stay on track with your financial objectives. Our platform keeps you accountable, ensuring you're always moving towards your financial aspirations.",
  },
  {
    name: "Learn from Bucky",
    imgSrc: "/bucky-icon.png",
    stamp: "bucky.png",
    description:
      "Chat with Bucky the kangaroo to get personalized savings advice. Let Bucky guide you through the best practices to manage your finances effectively.",
  },
];

const Benefits = () => (
  <section className="relative z-10 px-4 md:px-8 lg:px-16 bg-gray-100 mt-8">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="mx-auto flex flex-col items-center"
    >
      <TitleText title="Benefits" textStyles="text-center mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-7xl mx-auto">
        {benefitsData.map((member) => (
          <motion.div
            key={member.name}
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="mx-auto max-w-lg lg:max-w-xl bg-white border border-gray-200 rounded-sm shadow overflow-hidden"
          >
            <a href="#">
              <img
                className="w-full h-auto rounded-t-lg"
                src={member.imgSrc}
                alt={member.name}
              />
            </a>
            <div className="border-t border-gray-300 p-6">
              <h5 className="mb-3 text-2xl font-bold tracking-tight text-body">
                {member.name}
              </h5>
              <p className="mb-3 font-normal text-body">{member.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Benefits;
