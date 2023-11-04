"use client";

import lottie from "lottie-web";
import React, { useRef, useEffect } from "react";

const Lottie = ({ filePath }) => {
  const container = useRef(null);

  useEffect(() => {
    if (container && container.current) {
      lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require(`../public/${filePath}.json`),
      });
    }
  }, [filePath]);

  return (
    <div>
      <div ref={container}></div>
    </div>
  );
};

export default Lottie;
