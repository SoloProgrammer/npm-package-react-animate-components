"use client";

import * as React from "react";
import { useEffect, useRef, CSSProperties } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { anim } from "../../utils/framer";
import "./Fill.css";
import { FillProps } from "../../types/types";

const Fill = ({
  children,
  overlayBg,
  delay = 0,
  duration = 1,
  animateOnce = true,
  revealInView = true,
  animateFrom = "left",
}: FillProps) => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: animateOnce });
  const animationControls = useAnimation();

  const fillAnimate = {
    initial: {
      left: 0,
    },
    animate: {
      left: animateFrom === "left" ? "100%" : "-100%",
      transition: { ease: ["linear"] },
    },
    exit: { left: 0 },
  };

  useEffect(() => {
    if (isInview) {
      animationControls.start("animate");
    } else {
      // this else block will trigger when animateOnce prop is set to fasle and when the ref element is not in view we set the element that is to be animated again to it's hidden state
      animationControls.start("initial");
    }
  }, [isInview]);

  return (
    <motion.div ref={ref} className="fillParent">
      <motion.div
        style={
          {
            "--overlay-color": overlayBg,
            "--duration": duration,
            "--delay": delay,
          } as CSSProperties
        }
        {...anim(fillAnimate)}
        viewport={{ once: animateOnce }}
        className="invisiblePaper"
        animate={revealInView ? animationControls : fillAnimate.animate}
      />
      <div>{children}</div>
    </motion.div>
  );
};

export { Fill };
