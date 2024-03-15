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
export type FillProps = animateProps;
