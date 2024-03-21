import * as React from "react";

type animateProps = {
  children: React.ReactNode;
  overlayBg: string;
  revealInView?: true | false;
  animateOnce?: true | false;
  delay?: number;
  duration?: number;
};

type Origin = {
  origin?:
    | "center"
    | "bottom"
    | "top"
    | "left"
    | "right"
    | "bottom left"
    | "bottom right"
    | "top left"
    | "top right"
    | `${number} ${number}`;
};

export type RevealProps = animateProps;
export type FillProps = animateProps & { animateFrom?: "right" | "left" };
export type FadeInProps = Omit<animateProps, "overlayBg">;
export type PopProps = Omit<animateProps, "overlayBg"> & Origin;
export type TextRevealProps = Omit<animateProps, "children" | "overlayBg"> & {
  words: string[];
  delayPerWord?: number;
};

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

// Scroll Based animation components props

type ScrollProps = {
  children: React.ReactNode;
  iFade?: number;
  start?: number;
  end?: number;
  duration?: number;
};

export type GrowProps = ScrollProps &
  Origin & {
    iGrow?: number;
  };

export type SkateProps = ScrollProps & {
  iSkate?: number;
};

export type ProgressBarProps = Origin & {
  bg?: string;
  h?: number;
  position?: "top" | "bottom";
};
