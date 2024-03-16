"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { anim } from "../../utils/framer";
import { SlideInProps } from "../../types/types";

const SlideIn = (props: SlideInProps) => {
  const {
    children,
    delay = 0,
    animateOnce = true,
    revealInView = true,
    type = "tween",
  } = props;

  const slide = {
    initial: {
      opacity: 0,
      x: props.from === "right" ? props.right : props.left * -1,
    },
    [revealInView ? "inview" : "animate"]: {
      opacity: 1,
      x: 0,
      transition: {
        type, // You can use different types of transitions for now supports only ["tween", "spring"]
        delay,
        ...(props.type === "tween" ? { duration: props.duration || 1 } : {}), // conditionally adding duration property when type == "tween" and stil as the duration property is set to optinal in the type declaration which is why if user don't provide the duration property we set it to 1s by default
      },
    },
  };
  return (
    <motion.div {...anim(slide)} viewport={{ once: animateOnce }}>
      {children}
    </motion.div>
  );
};

export { SlideIn };
