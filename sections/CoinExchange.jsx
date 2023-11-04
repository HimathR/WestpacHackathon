"use client";
import React from "react";
import styles from "../styles";
import { motion } from "framer-motion";
import { planetVariants, staggerContainer, fadeIn } from "../utils/motion";

export const CoinExchange = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <h2 className="text-2xl font-semibold mb-6 text-body mt-6">
          Redeem your W Coins for
        </h2>
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="grid grid-cols-2 gap-4 md:grid-cols-4 "
        >
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
            <h3 className="text-lg font-semibold mb-2">Altitude Points</h3>
            <p className="text-sm">
              Westpac's own point system that can be used for a range of
              rewards.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src="/reward4.jpg"
              alt="Frequent Flyer Program Points"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">
              Frequent flyer points
            </h3>
            <p className="text-sm">
              Including oneworld, KrisFlyer, Velocity and Asia Miles.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CoinExchange;
