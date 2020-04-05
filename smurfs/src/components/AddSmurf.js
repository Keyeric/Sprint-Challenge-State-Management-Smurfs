import React, { useState } from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";

import { submitSmurf, getSmurfs } from "../actions/smurfActions";

const useStyles = makeStyles(theme => ({
  add: {
    background: "blue"
  }
}));

const AddSmurf = props => {
  const classes = useStyles();
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    height: "",
    age: ""
  });

  const handleSubmit = event => {
    event.preventDefault();
    props.submitSmurf(newSmurf);
  };

  const handleChanges = event => {
    setNewSmurf({
      ...newSmurf,
      [event.target.name]: event.target.value
    });
  };
  return (
    <form className={classes.add} onSubmit={handleSubmit}>
      <label>
        New Smurf:
        <br />
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChanges}
        />
        <br />
        <input
          type="number"
          name="height"
          placeholder="Height"
          onChange={handleChanges}
        />
        <br />
        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={handleChanges}
        />
        <br />
        <button type="submit">submit</button>
      </label>
    </form>
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
  getSmurfs
})(AddSmurf);
