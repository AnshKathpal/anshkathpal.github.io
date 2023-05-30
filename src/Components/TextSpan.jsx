import React from "react";
import { color, motion, useAnimationControls } from "framer-motion";

export const TextSpan = ({ children }) => {
  const controls = useAnimationControls();

  const ruubberBand = () => {
    controls.start({
      transform: [
        "scale3d(1,1,1)",
        "scale3d(1.4,.55,1)",
        "scale3d(.75,1.25,1)",
        "scale3d(1.25,.85,1)",
        "scale3d(.9,1.05,1)",
        "scale3d(1,1,1)",
      ],
    //   color: "rgb(185,16,128)",
    color : "rgb(31,229,222)"

      // transition : {
      //     times : [0, .4, .6, .7, .8, .9]
      // }
    });
  };

  const colorChange = () => {

    controls.start({
        color : "white"
    })

  }

  return (
    <motion.span
      style={{ display: "inline-block" }}
      animate={controls}
      onMouseOver={() => ruubberBand()}
      onMouseOut = {() => colorChange()}
    >
      {children}
    </motion.span>
  );
};
