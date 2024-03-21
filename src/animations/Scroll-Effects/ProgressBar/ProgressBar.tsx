"use client";
import * as React from "react";
import { motion, useScroll } from "framer-motion";
import { ProgressBarProps } from "../../../types/types";

const ProgressBar = ({
  bg,
  h,
  position = "top",
  origin = "left",
}: ProgressBarProps) => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        background: bg,
        height: `${h}px`,
        position: "fixed",
        width: `100vw`,
        [position]: "0",
        left: "0",
        zIndex: "1300",
        scaleX: scrollYProgress,
        transformOrigin: origin,
      }}
    />
  );
};

export { ProgressBar };
