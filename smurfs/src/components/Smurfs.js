import React from "react";
import { connect } from "react-redux";

import AddSmurfs from "./AddSmurf";

import { getSmurfs, submitSmurf, deleteSmurf } from "../actions/smurfActions";

const Smurfs = props => {
  const smuffinButton = e => {
    e.preventDefault();
    props.getSmurfs();
  };

  return (
    <div>
      <h2>Smurfs 2.0 w/ Redux:</h2>
      <button onClick={smuffinButton}>Shake Smurfy Hollow</button>
      <br />
      <AddSmurfs />
      {props.error && <p>{props.error}</p>}
      {props.smurfs.map(ie => {
        return (
          <div key={ie.id}>
            <p>
              {ie.name}, {ie.height}cm, {ie.age} years old
            </p>
            <span
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
