"use client";
import * as React from "react";
import { motion, useScroll } from "framer-motion";
import { ProgressBarProps } from "../../../types/types";

const ProgressBar = (props: ProgressBarProps) => {
  const { bg, h, origin = "left" } = props;
  const { scrollYProgress } = useScroll();

  let offsetVal = props.position === "top" ? props.top : props.bottom;

  return (
    <motion.div
      style={{
        background: bg,
        height: `${h}px`,
        position: "fixed",
        width: `100vw`,
        [props.position || "top"]: `${offsetVal || 0}px`,
        left: "0",
        zIndex: "1300",
        scaleX: scrollYProgress,
        transformOrigin: origin,
      }}
    />
  );
};

export { ProgressBar };
