"use client";

import * as React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GrowProps } from "../../../types/types";

const Grow = ({
  children,
  iGrow = 0.8,
  iFade = 0.3,
  origin = "center",
  start = 0.1,
  end = 1,
  duration = 0,
}: GrowProps) => {
  const ref = useRef(null);

  const animationStart = start; // 0 - 1
  const animationEnd = end; // 0 - 1
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${animationStart} 1`, `${animationEnd} 1`],
  });

  const initialGrowValue = iGrow; // 0 - 1
  const initialFadeValue = iFade; // 0 - 1
  const GrowValue = useTransform(
    scrollYProgress,
    [0, 1],
    [initialGrowValue, 1]
  );
  const opacityValue = useTransform(
    scrollYProgress,
    [0, 1],
    [initialFadeValue, 1]
  );

  return (
    <motion.div
      style={{
        scale: GrowValue,
        opacity: opacityValue,
        transformOrigin: origin,
        transition:`${duration}s transform`
      }}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};

export { Grow };
