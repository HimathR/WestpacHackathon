"use client";
import React, { useState, useEffect } from "react";
import { useCoins } from "../../context/CoinsContext";
import { motion } from "framer-motion";
import Unlockables from "./Unlockables";
import { TitleText } from "@/components";
import { AnimatePresence } from "framer-motion";
const positiveMessages = [
  "Bucky's impressed! Keep hopping towards your goals.",
  "Bucky noticed every bit you saved. Great job!",
  "Consistency is key. Bucky believes in you!",
  "You're on a roll! Bucky's rooting for you.",
  "Your savings journey is making Bucky proud!",
];

const negativeMessages = [
  "Bucky noticed you dipped into your savings. Let's try to bounce back next week!",
  "Bucky's here for you. Remember, every setback is a setup for a comeback.",
  "Don't be disheartened. Bucky knows you can turn things around!",
  "Even Bucky has rainy days. Let's get back on track together.",
  "Bucky's got your back! Let's aim for a better week ahead.",
];

const milestones = [
  {
    clotheName: "Baby Bucky",
    imgSrc: "/kanga1.png",
    milestone: 0,
  },
  {
    clotheName: "Bigger Bucky",
    imgSrc: "/kanga2.png",
    milestone: 50,
  },
  {
    clotheName: "Buff Bucky",
    imgSrc: "/kanga3.png",
    milestone: 100,
  },
  {
    clotheName: "Balenciaga Bucky",
    imgSrc: "/kanga4.png",
    milestone: 200,
  },
  {
    clotheName: "Badass Bucky",
    imgSrc: "/kanga5.png",
    milestone: 300,
  },
  {
    clotheName: "Captain Australia",
    imgSrc: "/kanga6.png",
    milestone: 500,
  },
];

const financialFacts = [
  {
    fact: "Did you know that saving just $5 a day can lead to over $1,800 in a year? Small savings add up!",
  },
  {
    fact: "Compound interest is the eighth wonder of the world. He who understands it, earns it; he who doesn't, pays it.",
  },
  {
    fact: "The 50/30/20 rule of thumb for budgeting: 50% of your income goes to needs, 30% to wants, and 20% to savings.",
  },
  {
    fact: "If you invested $1,000 in Amazon when it first went public, your investment would be worth over $1,000,000 today.",
  },
  {
    fact: "Bucking the trend: Did you know that kangaroos are a symbol of financial growth and progress in some cultures?",
  },
  {
    fact: "The largest coin ever minted was the Australian 2012 Red Kangaroo gold coin, weighing a massive 1 tonne!",
  },
];

const JoeyGame = ({ lastWeekSavings, currentSavings }) => {
  const { coins, setCoins } = useCoins();
  const [randomMessage, setRandomMessage] = useState("");
  const [coinsEarnedThisWeek, setCoinsEarnedThisWeek] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const [randomFact, setRandomFact] = useState("");

  const getRandomFact = () => {
    return financialFacts[Math.floor(Math.random() * financialFacts.length)]
      .fact;
  };

  const handleJoeyClick = () => {
    setRandomFact(getRandomFact());
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 10000); // Hide tooltip after 3 seconds
  };

  useEffect(() => {
    const diff = currentSavings - lastWeekSavings;
    let coinsChange =
      diff > 0 ? Math.floor(diff / 10) : -Math.floor(Math.abs(diff) / 20);

    setCoins(coins + coinsChange);
    setCoinsEarnedThisWeek(coinsChange);
    setRandomMessage(getRandomMessage(diff));
  }, [currentSavings, lastWeekSavings]);

  const incrementCoins = () => setCoins(coins + 10);
  const decrementCoins = () => setCoins(coins - 10);

  const getNextMilestone = () => {
    for (let i = milestones.length - 1; i >= 0; i--) {
      if (coins >= milestones[i].milestone) {
        return i === milestones.length - 1
          ? milestones[i] // Return the last milestone if coins are greater or equal
          : milestones[i + 1]; // Return the next milestone otherwise
      }
    }
    return milestones[0]; // Return the first milestone if no coins
  };

  const progress = () => {
    const nextMilestone = getNextMilestone();
    const previousMilestoneIndex = milestones.indexOf(nextMilestone) - 1;
    const previousMilestone =
      previousMilestoneIndex >= 0
        ? milestones[previousMilestoneIndex]
        : { milestone: 0 };

    const progressInRange =
      (coins - previousMilestone.milestone) /
      (nextMilestone.milestone - previousMilestone.milestone);
    const progressPercentage = Math.min(progressInRange * 100, 100); // Ensure we don't exceed 100%

    return progressPercentage;
  };

  const coinsUntilNextLevel = () => {
    const nextMilestone = getNextMilestone();
    if (coins >= milestones[milestones.length - 1].milestone) {
      return "Bucky's max level!";
    } else {
      return `${nextMilestone.milestone - coins} coins until ${
        nextMilestone.clotheName
      }!`;
    }
  };

  const getJoeyImage = () => {
    for (let i = milestones.length - 1; i >= 0; i--) {
      if (coins >= milestones[i].milestone) {
        return milestones[i].imgSrc;
      }
    }
    return milestones[0].imgSrc;
  };

  const getRandomMessage = (diff) => {
    const messages = diff >= 0 ? positiveMessages : negativeMessages;
    return messages[Math.floor(Math.random() * messages.length)];
  };
  return (
    <div className="flex mt-4 flex-col items-center justify-center min-h-screen bg-white">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="z-100 fixed bottom-4 md:bottom-6 lg:bottom-8 right-4 md:right-6 lg:right-8 bg-green-200 text-black p-3 md:p-4 lg:p-5 rounded-lg shadow-md max-w-sm"
          >
            {randomFact}
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="bg-cover bg-center overflow-hidden border-2"
        style={{
          backgroundImage: "url('/background.png')",
          width: "100%",
          minHeight: "70vh", // 90% of the viewport height
        }}
      >
        <div className="flex justify-center items-center pt-20 pb-8">
          <motion.img
            src={getJoeyImage()}
            alt="Joey"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="w-64 md:w-64 lg:w-96 mt-80"
            onClick={handleJoeyClick}
          />
        </div>
      </div>
      <TitleText title="Stats" textStyles="text-center" />
      <div className="flex flex-wrap justify-center gap-4 mt-4 mx-4">
        <div className="flex flex-col bg-white p-4 md:p-6 lg:p-8 mb-8 rounded-lg shadow-md border border-gray-300 w-full md:w-1/2 lg:w-1/3">
          <p className="flex items-center space-x-2 text-gray-700 text-xl md:text-2xl mb-2">
            <span className="font-bold text-westpac-red">Savings:</span>
            <span>${currentSavings}</span>
          </p>
          <p className="flex items-center space-x-2 text-gray-700 text-xl md:text-2xl mb-2">
            <span className="font-bold text-westpac-red">Coins:</span>
            <span>{coins}</span>
          </p>
          <p className="flex items-center space-x-2 text-gray-700 text-xl md:text-2xl mb-2">
            <span className="font-bold text-westpac-red">
              Coins Earned This Week:
            </span>
            <span>{coinsEarnedThisWeek}</span>
          </p>
          <p className="flex items-center space-x-2 text-gray-700 text-xl md:text-2xl mb-2">
            <span className="font-bold text-westpac-red">
              Weekly Difference:
            </span>
            <span>${(currentSavings - lastWeekSavings).toFixed(2)}</span>
          </p>
          <p className="text-gray-700 text-xl md:text-2xl mb-2">
            <span>{randomMessage}</span>
          </p>
          <div className="bg-gray-200 rounded-md border-body shadow-md mt-4 relative flex items-center h-8">
            <div
              className="bg-westpac-red h-8 rounded-lg bg-gradient-to-r from-red-300 to-red-500 via-red-700 animated-gradient"
              style={{ width: `${progress()}%` }}
            ></div>
            {coins < 1000 && (
              <div className="absolute font-bold mr-2 right-0 text-xs text-body">
                {coinsUntilNextLevel()}
              </div>
            )}
            {coins >= 1000 && (
              <div className="absolute font-bold mr-2 right-0 text-xs text-white">
                Congrats! Bucky is max level!
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col bg-white p-4 md:p-6 lg:p-8 mb-8 rounded-lg shadow-md border border-gray-300 w-full md:w-1/2 lg:w-1/3">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
            Demo Mode
          </h2>
          <p className="text-center text-gray-600 mb-4">
            For demonstration purposes, you can artificially add or remove coins
            to force Bucky to grow!!
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={incrementCoins}
              className="bg-green-500 text-body font-bold py-2 px-4 rounded"
            >
              Increment Coins
            </button>
            <button
              onClick={decrementCoins}
              className="bg-red-500  text-body font-bold py-2 px-4 rounded"
            >
              Decrement Coins
            </button>
          </div>
        </div>
      </div>
      <Unlockables coins={coins} milestones={milestones} />
    </div>
  );
};

export default JoeyGame;
