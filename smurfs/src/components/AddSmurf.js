import React, { useState } from "react";
import { connect } from "react-redux";
// import { useHistory } from "react-router-dom";

import { submitSmurf, getSmurfs } from "../actions/smurfActions";

const AddSmurf = props => {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    height: "",
    age: ""
  });

  // const history = useHistory();

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
    <form onSubmit={handleSubmit}>
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
