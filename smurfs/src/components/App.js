import React, { Component } from "react";
import Smurfs from "./Smurfs";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  app: {
    textAlign: "center"
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Smurfs />
    </div>
  );
};

export default App;
