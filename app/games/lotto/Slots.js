"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useCoins } from "../../context/CoinsContext";
import { useUser } from "../../context/UserContext";
const emojis = ["🦘", "🐨", "🌏", "🌞", "🏖️"];

const generateTicket = () => {
  let ticket = [
    emojis[Math.floor(Math.random() * emojis.length)],
    emojis[Math.floor(Math.random() * emojis.length)],
  ];

  ticket.push(ticket[Math.floor(Math.random() * 2)]);

  return ticket;
};

const Slots = ({ savings }) => {
  const { coins, setCoins } = useCoins();
  const { userDetails, isLoggedIn } = useUser(); // Retrieve isLoggedIn from the context
  const [showLoginToast, setShowLoginToast] = useState(false); // State to manage the login toast
  const [tickets, setTickets] = useState([]);
  const [currentSpin, setCurrentSpin] = useState(["🦘", "🦘", "🦘"]);
  const [resultMessage, setResultMessage] = useState("Spin To Find Out!");
  const [spinning, setSpinning] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    let spinInterval;
    if (spinning) {
      setResultMessage("Spinning");
      spinInterval = setInterval(() => {
        setCurrentSpin([
          emojis[Math.floor(Math.random() * emojis.length)],
          emojis[Math.floor(Math.random() * emojis.length)],
          emojis[Math.floor(Math.random() * emojis.length)],
        ]);
      }, 100);
    } else {
      clearInterval(spinInterval);
    }
    return () => clearInterval(spinInterval);
  }, [spinning]);

  const startSpin = () => {
    if (isLoggedIn) {
      setSpinning(true);
    } else {
      setShowLoginToast(true);
      setTimeout(() => setShowLoginToast(false), 3000); // Hide the toast after 3 seconds
    }
  };

  const stopSpin = () => {
    setSpinning(false);
    if (tickets.some((ticket) => ticket.join("") === currentSpin.join(""))) {
      setCoins(coins + 25);
      setResultMessage("You Won! Congratz 🎉");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } else {
      setResultMessage("Better Luck Next Time 😔");
    }
  };

  const ticketCount = Math.floor(savings / 25);
  if (tickets.length !== ticketCount) {
    const newTickets = Array(ticketCount)
      .fill(null)
      .map(() => generateTicket());
    setTickets(newTickets);
  }

  return (
    <div className="p-4 md:p-8 bg-white rounded-lg shadow-md relative">
      <h2 className="text-westpac-red text-2xl md:text-3xl mb-4 text-center">
        {userDetails ? `${userDetails.firstName}'s Slots Game` : "Slots Game"}
      </h2>
      {showToast && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="z-100 fixed bottom-4 md:bottom-6 lg:bottom-8 right-4 md:right-6 lg:right-8 bg-green-200 text-black p-3 md:p-4 lg:p-5 rounded-lg shadow-md max-w-sm"
        >
          +25 W coins
        </motion.div>
      )}

      {showLoginToast && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="z-100 fixed bottom-4 md:bottom-6 lg:bottom-8 right-4 md:right-6 lg:right-8 bg-red-200 text-black p-3 md:p-4 lg:p-5 rounded-lg shadow-md max-w-sm"
        >
          You need to be logged in to play this game!
        </motion.div>
      )}

      <div className="flex justify-center my-6 items-center ">
        <div className="flex space-x-6 text-6xl md:text-[10rem] lg:text-[12rem] border-4 border-westpac-red bg-gradient-to-r from-red-200 to-yellow-200 p-8 rounded-lg shadow-xl animated-gradient">
          {currentSpin.map((emoji, index) => (
            <div key={index}>{emoji}</div>
          ))}
        </div>

        <div className="relative">
          <img
            src={spinning ? "/lever2.png" : "/lever.png"}
            alt="Slot Machine Lever"
            className="sm:w-8 md:w-32 cursor-pointer"
          />
        </div>
      </div>

      <div className="flex justify-center space-x-4 mb-6">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={startSpin}
          disabled={spinning} // Disable if spinning or not logged in
          className={`bg-westpac-red text-white px-6 py-2 rounded-md hover:bg-opacity-90 focus:outline-none
          }`}
        >
          Start
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={stopSpin}
          disabled={!spinning}
          className={`bg-westpac-red text-white px-6 py-2 rounded-md hover:bg-opacity-90 focus:outline-none ${
            !spinning ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          Stop
        </motion.button>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0 md:space-x-12 lg:space-x-16">
        <motion.img
          src="/point.png"
          alt="Point Image"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="w-32 md:w-64 lg:w-80"
        />
        <div className="flex flex-col bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-md border border-gray-300 w-full md:w-[30rem] lg:w-[36rem]">
          <p className="flex items-center space-x-2 text-gray-700 text-xl md:text-2xl mb-2">
            <span className="font-bold text-westpac-red">Savings:</span>
            <span>${savings}</span>
          </p>
          <p className="flex items-center space-x-2 text-gray-700 text-xl md:text-2xl mb-2">
            <span className="font-bold text-westpac-red">Coins:</span>
            <span>{coins}</span>
          </p>
          <p className="flex items-center space-x-2 text-gray-700 text-xl md:text-2xl mb-2">
            <span className="font-bold text-westpac-red">Tickets:</span>
            <span>{ticketCount}</span>
          </p>
          <p className="flex items-center space-x-2 text-gray-700 text-xl md:text-2xl">
            <span className="font-bold text-westpac-red">Result:</span>
            <span>{resultMessage}</span>
          </p>

          <p className="mt-2">
            Note: For demonstration purposes, the lottery is spammable but in
            normal circumstances would have a daily cooldown!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slots;
