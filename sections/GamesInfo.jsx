"use client";

import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TypingText, TitleText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

const gameData = [
  {
    name: "Kangaroo Lotto",
    imgSrc: "/lottobanner.png",
    stamp: "lottoroo.png",
    description:
      "With every $25 saved, you earn a lottery ticket. Spin the wheel weekly, match the numbers, and celebrate with W coins. Savings now come with a sprinkle of excitement!",
  },
  {
    name: "Raise the Joey",
    imgSrc: "/raisejoeybanner.png",
    stamp: "raisethejoey.png",
    description:
      "Save weekly, see your digital joey thrive! Missed a goal? No worries, next week brings another chance. Dress up your joey with cool accessories using W coins. Making savings a joyful journey!",
  },
];
const GamesInfo = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const GameSlide = ({ name, imgSrc, stamp, description }) => (
    <div className>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6 `}
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col bg-white sm:p-8 p-4 rounded-[4px] border-[1px] border-westpac-red relative"
        >
          <div>
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-heading text-westpac-red">
              {name}
            </h4>
          </div>

          <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-body">
            {description}
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="relative flex-1 flex justify-center items-center"
        >
          <img
            src={imgSrc}
            alt="planet-09"
            className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
          />

          <motion.div
            variants={zoomIn(0.4, 1)}
            className="lg:block hidden absolute -left-[10%] top-[3%]"
          >
            <img
              src={stamp}
              alt="stamp"
              className="w-[155px] h-[155px] object-contain"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );

  return (
    <section className={`${styles.paddings} bg-white`}>
      <TitleText title="Games" textStyles="text-center mb-7" />
      <Slider {...settings}>
        {gameData.map((feedback, index) => (
          <GameSlide
            key={index}
            name={feedback.name}
            imgSrc={feedback.imgSrc}
            stamp={feedback.stamp}
            description={feedback.description}
          />
        ))}
      </Slider>
    </section>
  );
};

export default GamesInfo;
