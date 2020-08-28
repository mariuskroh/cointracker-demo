import React, { useState, useEffect } from "react";
import Dot from "./Dot";
import styles from "./LoaderStyles";

const Loader = ({ loaded }) => {
  const classes = styles();

  return (
    <div className={classes.loader}>
      <Dot delay="0s" color="green" />
      <Dot delay="0.1s" color="red" />
      <Dot delay="0.2s" color="blue" />
    </div>
  );
  //   useEffect(() => {
  //     if (loaded) {
  //       console.log(loaded);
  //     }
  //   });
  //   useEffect(() => {
  //     if (dots.length <= 3) {
  //       setTimeout(() => {
  //         setDots((state) => state + ".");
  //       }, 300);
  //     } else {
  //       setDots("");
  //     }
  //   }, [dots.length]);
  //   return dots;
};

export default Loader;
