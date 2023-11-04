"use client";

import { Suspense } from "react";
import Loading from "../loading";
import { TypingText } from "../../components";
import { motion } from "framer-motion";

import { fadeIn, staggerContainer } from "../../utils/motion";

const Page = () => (
  <div className="bg-primary-black overflow-hidden d-flex justify-content-center align-items-center">
    <Suspense fallback={<Loading />}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <TypingText title="Chat With Bucky" textStyles="text-center" />
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-body"
        >
          <div className="p-8 lg:px-48 w-full">
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/c6DYOaJEJ76qmyT-IV6d7"
              width="100%"
              style={{
                height: "100%",
                minHeight: "700px",
                boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
                borderRadius: "15px",
              }}
              frameBorder="0"
            ></iframe>
          </div>
        </motion.div>
      </motion.div>
    </Suspense>
  </div>
);

export default Page;
