"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { footerVariants } from "../utils/motion";

const Footer = () => (
  <div>
    <div className="w-full h-3 bg-westpac-red"></div>
    <motion.footer
      variants={footerVariants}
      initial="show"
      whileInView="show"
      className={`${styles.xPaddings} py-8 bg-white-background`}
    >
      {/* Red line */}

      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8 mt-4`}>
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold text-[44px] text-westpac-red">
            RooRewards: Celebrating The Little Ws.
          </h4>
        </div>

        <div className="flex md:flex-row flex-col items-center md:justify-between justify-center md:flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-body md:mb-0 mb-4">
            Westpac Hackathon 2023
          </h4>
          {/* Westpac logo will now appear on its own line at the bottom on mobile */}
          <div className="md:mt-0 mt-4">
            <img
              src="/westpac.svg"
              alt="Westpac Logo"
              className="h-8 mx-auto"
            />
          </div>
        </div>
      </div>
    </motion.footer>
  </div>
);

export default Footer;
