import * as React from "react";

type animateProps = {
  children: React.ReactNode;
  overlayBg: string;
  revealInView?: true | false;
  animateOnce?: true | false;
  delay?: number;
  duration?: number;
};

export type RevealProps = animateProps;
export type FillProps = animateProps & { animateFrom?: "right" | "left" };

type LeftProps = {
  from: "left";
  left: number;
};
type RightProps = {
  from: "right";
  right: number;
};
type TweenProps = {
  type: "tween";
  duration?: number;
};
type SpringProps = {
  type: "spring";
};

export type SlideInProps = Omit<animateProps, "overlayBg" | "duration"> &
  (TweenProps | SpringProps) &
  (LeftProps | RightProps);
