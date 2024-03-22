"use client";

import * as React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SkateProps } from "../../../types/types";

const Skate = ({
  children,
  iSkate = 100,
  iFade = 0.2,
  duration = 0,
  start = 0,
  end = 1,
}: SkateProps) => {
  const ref = useRef(null);

  const animationStart = start; // 0 - 1
  const animationEnd = end; // 0 - 1
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${animationStart} 1`, `${animationEnd} 1`],
  });

  const initialSkateValue = iSkate; // 0 < number < 0
  const initialFadeValue = iFade; // 0 - 1
  const skateValue = useTransform(
    scrollYProgress,
    [0, 1],
    [initialSkateValue, 0]
  );
  const opacityValue = useTransform(
    scrollYProgress,
    [0, 1],
    [initialFadeValue, 1]
  );

  return (
    <motion.div
      style={{
        x: skateValue,
        opacity: opacityValue,
        transition: `${duration}s transform`,
      }}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};

export { Skate };
