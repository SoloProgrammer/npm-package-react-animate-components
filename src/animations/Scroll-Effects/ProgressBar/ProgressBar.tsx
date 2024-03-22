"use client";
import * as React from "react";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ProgressBarProps } from "../../../types/types";

const ProgressBar = (props: ProgressBarProps) => {
  const {
    bg,
    h,
    origin = "left",
    trackColor = `#f0f2f6`,
    showTrack = false,
  } = props;
  const { scrollYProgress } = useScroll();

  const [scrollY, setScroll] = useState<number>(scrollYProgress.get());

  const MIN_SCROLL_INDEX = 0.0015;
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0 && latest < MIN_SCROLL_INDEX) {
      setScroll(scrollYProgress.get());
    } else if (latest === 0) setScroll(scrollYProgress.get());
  });

  let offsetVal = props.position === "top" ? props.top : props.bottom;

  const HIDE_COLOR = `transperent`;
  const TRACK_COLOR = showTrack ? trackColor : HIDE_COLOR;
  const PROGRESS_BG = bg;

  return (
    <div
      style={{
        height: `${h}px`,
        position: "fixed",
        width: "100vw",
        left: 0,
        [props.position || "top"]: `${offsetVal || 0}px`,
        background: TRACK_COLOR,
        zIndex: "1300",
        opacity: scrollY > 0 ? 1 : 0,
      }}
    >
      <motion.div
        style={{
          background: PROGRESS_BG,
          height: "100%",
          width: `100%`,
          scaleX: scrollYProgress,
          transformOrigin: origin,
        }}
      />
    </div>
  );
};

export { ProgressBar };
