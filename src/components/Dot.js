import React from "react";
import styles from "./DotStyles";

const Dot = (props) => {
  const classes = styles(props);
  return <div className={classes.dot}></div>;
};

export default Dot;
