"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { anim } from "../../utils/framer";
import { PopProps } from "../../types/types";

const Pop = ({
  children,
  delay = 0,
  duration = 0.5,
  animateOnce = true,
  revealInView = true,
  origin = "center",
}: PopProps) => {
  const PopVariants = {
    initial: {
      scale: 0.2,
      transformOrigin: origin,
    },
    [revealInView ? "inview" : "animate"]: {
      scale: 1,
      transition: { duration, delay, ease: [0.68, 0, 0.32, 1.6] },
    },
  };

  return (
    <motion.div viewport={{ once: animateOnce }} {...anim(PopVariants)}>
      {children}
    </motion.div>
  );
};

export { Pop };
