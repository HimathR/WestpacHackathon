"use client";

import { motion } from "framer-motion";
import { TitleText, TypingText } from "../../components";
import { fadeIn, staggerContainer } from "../../utils/motion";
import Link from "next/link";

const gameData = [
  {
    name: "Kangaroo Lotto",
    imgSrc: "/banner1.png",
    stamp: "lottoroo.png",
    url: "/games/lotto",
    description:
      "With every $25 saved, you earn a lottery ticket. Spin the wheel weekly, match the numbers, and celebrate with W coins. Savings now come with a sprinkle of excitement!",
  },
  {
    name: "Raise Bucky",
    imgSrc: "/banner2.png",
    stamp: "raisethejoey.png",
    url: "/games/raisethejoey",
    description:
      "Save weekly, see your digital joey thrive! Missed a goal? No worries, next week brings another chance. Dress up your joey with cool accessories using W coins. Making savings a joyful journey!",
  },
];

const cardHover = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
};

export const SelectGames = () => {
  return (
    <div>
      <section className="relative z-10 px-4 md:px-8 lg:px-16 mt-4 mb-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto flex flex-col items-center"
        >
          <TitleText title="Games Available" textStyles="text-center" />

          <div className="flex flex-wrap justify-center mt-8 w-full pr-8">
            {gameData.map((member) => (
              <Link href={member.url} key={member.name}>
                <motion.div
                  key={member.name}
                  variants={{
                    ...fadeIn("right", "tween", 0.2, 1),
                    ...cardHover,
                  }}
                  whileHover="hover"
                  className="w-full md:flex-initial lg:max-w-[370px] flex justify-end flex-col m-4 p-4 sm:p-8 rounded-[4px] shadow-md border-[1px] border-westpac-red relative cursor-pointer transform transition-transform duration-300 bg-white"
                >
                  <img
                    src={member.stamp}
                    alt={member.name}
                    className="w-full h-96 object-cover mb-4 rounded-[28px]"
                  />
                  <div>
                    <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-heading">
                      {member.name}
                    </h4>
                    <p className="mt-[8px] font-normal text-[16px] sm:text-[18px] leading-[22.68px] sm:leading-[24.68px] text-body">
                      {member.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};
