"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { mockSavingsInfo, mockTransactions } from "../../constants/data";

export default function AskBucky({ savingsData }) {
  const [buckysAdvice, setBuckysAdvice] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [buckyImage, setBuckyImage] = useState("/wave.png");

  const askBucky = async () => {
    setIsLoading(true);
    setBuckyImage("/thonk.png");
    try {
      const response = await fetch("/api/bucky", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          savingsInfo: savingsData,
          transactions: mockTransactions,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setBuckysAdvice(data.advice);
      } else {
        setBuckysAdvice(
          "Sorry, I couldn't fetch advice from Bucky at the moment."
        );
      }
    } catch (error) {
      console.error("Error fetching Bucky's advice:", error);
      setBuckysAdvice("An error occurred while fetching Bucky's advice.");
    } finally {
      setIsLoading(false);
      setBuckyImage("/happy.png");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="rounded-lg p-4 md:p-6 bg-white shadow-md mb-6 flex flex-col md:flex-row">
      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
        <motion.div
          className="w-96 h-96 relative"
          key={buckyImage}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={buckyImage}
            alt="Bucky"
            layout="fill"
            objectFit="contain"
          />
        </motion.div>
      </div>
      <div className="flex-grow">
        <h1 className="text-3xl font-bold mb-4 text-body">
          Bucky's Financial Advice
        </h1>
        <button
          className={`bg-westpac-red text-white rounded-md p-2 mt-2 ${
            isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-red-400"
          }`}
          onClick={askBucky}
          disabled={isLoading}
        >
          Ask Bucky
        </button>
        <AnimatePresence exitBeforeEnter>
          {isLoading ? (
            <motion.div
              className="mt-4 flex items-center justify-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.75, ease: "easeInOut" }}
            >
              <div className="w-24 h-24 relative">
                <Image
                  src="/coin-icon.png"
                  alt="Loading"
                  layout="fill"
                  objectFit="contain"
                  className="animate-spin"
                />
              </div>
            </motion.div>
          ) : (
            buckysAdvice && (
              <motion.div
                className="mt-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.75, ease: "easeInOut" }}
              >
                <strong>Bucky's Advice:</strong> {buckysAdvice}
              </motion.div>
            )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
