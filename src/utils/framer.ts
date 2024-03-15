import { Variants } from "framer-motion";

export const anim = (variants: Variants) => ({
  initial: "initial",
  animate: "animate",
  exit: "exit",
  whileInView: "inview",
  variants,
});
