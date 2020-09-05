import React from "react";
import { Redirect } from "react-router-dom";
import Dot from "./Dot";
import styles from "./LoaderStyles";

const Loader = ({ loading }) => {
  const classes = styles();

  if (loading) {
    return (
      <div className={classes.loader}>
        <Dot delay="0s" color="black" />
        <Dot delay="0.1s" color="black" />
        <Dot delay="0.2s" color="black" />
      </div>
    );
  } else {
    return <Redirect to="/search" />;
  }
};

export default Loader;
