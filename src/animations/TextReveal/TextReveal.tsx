"use client";
import * as React from "react";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { anim } from "../../utils/framer";
import { TextRevealProps } from "../../types/types";

const TextReveal = ({
  words,
  duration = 0.8,
  delay = 0,
  delayPerWord = 0.02,
  revealInView = true,
  animateOnce = true,
}: TextRevealProps) => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: animateOnce });
  const animationControls = useAnimation();

  const RevealVariants = {
    initial: {
      y: "100%",
    },
    animate: {
      y: "0",
    },
  };

  useEffect(() => {
    if (isInview) {
      animationControls.start("animate");
    } else {
      animationControls.start("initial");
    }
  }, [isInview]);

  const DrawEaseIn = [0.65, 0, 0.35, 1];

  return (
    <div ref={ref} style={{ lineHeight: "1.1" }}>
      {words.map((word, i) => (
        <div
          style={{
            overflow: "hidden",
            marginRight: "8px",
            display: "inline-block",
          }}
        >
          <motion.span
            dangerouslySetInnerHTML={{ __html: word }}
            {...anim(RevealVariants)}
            viewport={{ once: animateOnce }}
            transition={{
              duration,
              delay: delay - delayPerWord + delayPerWord * (i + 1), // Adding a delay to the start of the animation for each word, so that each word starts animating after the specified delay's' value from props has passed.
              ease: DrawEaseIn,
              type: "tween",
            }}
            style={{
              display: "inline-block",
            }}
            animate={revealInView ? animationControls : RevealVariants.animate}
            key={i}
          />
        </div>
      ))}
    </div>
  );
};

export { TextReveal };
