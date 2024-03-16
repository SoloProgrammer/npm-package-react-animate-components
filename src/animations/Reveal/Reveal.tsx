"use client";

import * as React from "react";
import { useEffect, useRef, CSSProperties } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { anim } from "../../utils/framer";
import "./Reveal.css";
import { RevealProps } from "../../types/types";

const Reveal = ({
  children,
  overlayBg,
  revealInView = true,
  animateOnce = true,
  duration = 0.5,
  delay = 0.25,
}: RevealProps) => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: animateOnce });
  const animationControls = useAnimation();

  useEffect(() => {
    if (isInview) {
      animationControls.start("animate");
    } else {
      animationControls.start("initial");
    }
  }, [isInview]);

  const slideUpAnimate = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration, delay },
    },
    exit: {
      opacity: 0,
      y: 100,
    },
  };

  const curtainAnimate = {
    initial: {
      left: 0,
    },
    [revealInView ? "inview" : "animate"]: {
      left: "100%",
      transition: {
        duration: 1,
        delay,
      },
    },
  };

  return (
    <div ref={ref} className="revealParent" style={{ width: "fit-content" }}>
      <motion.div
        viewport={{ once: animateOnce }}
        {...anim(curtainAnimate)}
        className="revealOverlay"
        style={
          {
            "--overlay-color": overlayBg,
          } as CSSProperties
        }
      />
      <motion.div
        {...anim(slideUpAnimate)}
        viewport={{ once: animateOnce }}
        animate={revealInView ? animationControls : slideUpAnimate.animate}
      >
        {children}
      </motion.div>
    </div>
  );
};

export { Reveal };
