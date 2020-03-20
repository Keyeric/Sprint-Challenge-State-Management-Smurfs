import React, { useState } from "react";
import { connect } from "react-redux";

import { submitSmurf, getSmurfs } from "../actions/smurfActions";

const AddSmurf = props => {
  const [smurfName, setSmurfName] = useState("");
  const [smurfHeight, setSmurfHeight] = useState("");
  const [smurfAge, setSmurfAge] = useState("");

  const blankBlue = {
    key: Date.now(),
    name: smurfName,
    height: smurfHeight,
    age: smurfAge,
    id: props.smurfs.length
  };
  const handleSubmit = event => {
    event.preventDefault();
    props.submitSmurf(blankBlue);
  };

  const handleChangeName = event => {
    setSmurfName(event.target.value);
  };
  const handleChangeHeight = event => {
    setSmurfHeight(event.target.value);
  };
  const handleChangeAge = event => {
    setSmurfAge(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="smurfyboi">New Smurf: </label>
      <br />
      <input
        id="smurfyboi"
        type="text"
        placeholder="Name"
        onChange={handleChangeName}
      />
      <br />
      <input
        id="smurfyboi"
        type="number"
        placeholder="Height"
        onChange={handleChangeHeight}
      />
      <br />
      <input
        id="smurfyboi"
        type="number"
        placeholder="Age"
        onChange={handleChangeAge}
      />
      <br />
      <button type="submit">submit</button>
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
