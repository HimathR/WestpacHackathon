"use client";
import React, { useState, useEffect } from "react";
import { useCoins } from "../context/CoinsContext";
import { motion } from "framer-motion";

const addAltitudeRewards = (amount) => {
  console.log(`Added ${amount} Altitude Rewards`);
};

const createVoucher = (amount) => {
  console.log(`Created a ${amount} voucher`);
};

const Exchange = () => {
  const { coins, setCoins } = useCoins();
  const [rewardsAmount, setRewardsAmount] = useState(1);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Function to show toast and hide it after 3 seconds
  const triggerToast = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  useEffect(() => {
    if (error) {
      triggerToast(error);
    }
  }, [error]);

  const handleExchangeForRewards = () => {
    if (coins < rewardsAmount) {
      setError("You do not have enough coins to exchange for rewards.");
      return;
    }
    setCoins(coins - rewardsAmount);
    addAltitudeRewards(rewardsAmount);
    setError("");
    triggerToast(`Exchanged ${rewardsAmount} coins for Altitude Rewards`);
  };

  const handleExchangeForVoucher = () => {
    if (coins < 50) {
      setError("You need at least 50 coins to exchange for a $5 gift voucher.");
      return;
    }
    setCoins(coins - 50);
    createVoucher("$5");
    setError("");
    triggerToast("Exchanged 50 coins for a $5 gift voucher");
  };

  return (
    <div className="flex flex-col rounded-lg p-4 md:p-6 bg-white shadow-md mb-6 relative">
      {showToast && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 right-4 bg-green-200 text-black p-3 rounded-lg shadow-md max-w-sm"
        >
          {toastMessage}
        </motion.div>
      )}
      <h2 className="text-lg font-semibold mb-4">Exchange Coins</h2>
      <p>
        You currently have {coins} coins. All Altitude Rewards Points are
        trackable with your Westpac Account!{" "}
      </p>

      <div className="my-4">
        <input
          type="range"
          min="1"
          max={coins}
          value={rewardsAmount}
          onChange={(e) => setRewardsAmount(parseInt(e.target.value))}
          className="w-full"
        />
        <button
          className="text-westpac-red hover:bg-red-100 font-bold py-2 px-4 rounded"
          onClick={handleExchangeForRewards}
        >
          Exchange {rewardsAmount} Coins for Altitude Rewards
        </button>
      </div>

      <button
        className="text-westpac-red hover:bg-red-100 font-bold py-2 px-4 rounded"
        onClick={handleExchangeForVoucher}
      >
        Exchange for $5 Gift Voucher
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <hr className="my-4 border-gray-300" />

      <h2 className="text-2xl font-semibold mb-6 text-body mt-6">
        Redeem your W Coins for
      </h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 ">
        <div className="flex flex-col items-center text-center">
          <img
            src="/reward1.jpg"
            alt="Gift Cards"
            className="w-32 h-32 rounded-full mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">Gift cards</h3>
          <p className="text-sm">
            Mastercard, Bunnings, JB Hi-Fi or any other of our 24 partner
            retailers.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src="reward2.jpg"
            alt="Cashback"
            className="w-32 h-32 rounded-full mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">Cashback</h3>
          <p className="text-sm">
            Help repay your card balance by turning points into credit on your
            card.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src="/reward3.jpg"
            alt="Something Else"
            className="w-32 h-32 rounded-full mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">Something else</h3>
          <p className="text-sm">
            From cinema tickets to spa treatments, and everything in-between.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src="/reward4.jpg"
            alt="Frequent Flyer Program Points"
            className="w-32 h-32 rounded-full mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">
            Frequent flyer program points
          </h3>
          <p className="text-sm">
            Including oneworld, KrisFlyer, Velocity and Asia Miles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Exchange;
