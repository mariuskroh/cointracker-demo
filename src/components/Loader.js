import React from "react";
import Dot from "./Dot";
import styles from "./LoaderStyles";

const Loader = () => {
  const classes = styles();

  return (
    <div className={classes.loader}>
      <Dot delay="0s" color="black" />
      <Dot delay="0.1s" color="black" />
      <Dot delay="0.2s" color="black" />
    </div>
  );
};

export default Loader;
