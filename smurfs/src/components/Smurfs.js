import React from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";

import AddSmurfs from "./AddSmurf";
import { getSmurfs, submitSmurf, deleteSmurf } from "../actions/smurfActions";

const useStyles = makeStyles(theme => ({
  smurfMap: {
    background: "red",
    // maxWidth: "100 %",
    width: "20%",
    margin: "0 auto",
    padding: "0.1rem 0"
  },
  delete: {
    background: "black",
    color: "white",
    padding: "0.1rem 1rem",
    paddingTop: "0.2rem"
  }
}));

const Smurfs = props => {
  const classes = useStyles();

  const smuffinButton = e => {
    e.preventDefault();
    props.getSmurfs();
  };

  return (
    <div>
      <h2>Smurfs 2.0 w/ Redux:</h2>
      <button onClick={smuffinButton}>Shake Smurfy Hollow</button>
      <br />
      {props.error && <p>{props.error}</p>}
      {props.smurfs.map(ie => {
        return (
          <div className={classes.smurfMap} key={ie.id}>
            <p>
              Name: {ie.name}, <br />
              Height: {ie.height}cm, <br />
              Age: {ie.age} years old
            </p>
            <span
              className={classes.delete}
              onClick={e => {
                e.stopPropagation();
                props.deleteSmurf(ie);
              }}
            >
              {" "}
              X{" "}
            </span>
          </div>
        );
      })}
      <AddSmurfs />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error
  };
};
export default connect(mapStateToProps, {
  submitSmurf,
  getSmurfs,
  deleteSmurf
})(Smurfs);
