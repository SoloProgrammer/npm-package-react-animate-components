"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { anim } from "../../utils/framer";
import { FadeInProps } from "../../types/types";
const FadeIn = ({
  children,
  revealInView = true,
  animateOnce = true,
  delay = 0,
  duration = 1,
}: FadeInProps) => {
  const FadeVariants = {
    initial: {
      opacity: 0,
    },
    [revealInView ? "inview" : "animate"]: {
      opacity: 1,
      transition: { delay, duration },
    },
  };
  return (
    <motion.div {...anim(FadeVariants)} viewport={{ once: animateOnce }}>
      {children}
    </motion.div>
  );
};

export { FadeIn };
