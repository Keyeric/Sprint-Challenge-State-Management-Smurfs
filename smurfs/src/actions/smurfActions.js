import axios from "axios";

export const GET_SMURF_START = "GET_SMURFS_START";
export const GET_SMURF_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURF_FAILURE = "GET_SMURFS_FAILURE";

export const SUBMIT_SMURF_START = "SUBMIT_SMURFS_START";
export const SUBMIT_SMURF_SUCCESS = "SUBMIT_SMURFS_SUCCESS";
export const SUBMIT_SMURF_FAILURE = "SUBMIT_SMURFS_FAILURE";

export const DELETE_SMURF_START = "DELETE_SMURFS_START";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURFS_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURFS_FAILURE";

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURF_START });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      dispatch({ type: GET_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(`Retrieve error: ${err}`);
      dispatch({
        type: GET_SMURF_FAILURE,
        payload: `Error ${err.response.status}: ${err.response.statusText}`
      });
    });
};

export const submitSmurf = smurf => dispatch => {
  dispatch({ type: SUBMIT_SMURF_START });
  axios
    .post(`http://localhost:3333/smurfs`, smurf)
    .then(res => {
      dispatch({ type: SUBMIT_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: SUBMIT_SMURF_FAILURE,
        payload: `Error ${err.response.status}: ${err.response.statusText}`
      });
    });
};

export const deleteSmurf = smurf => dispatch => {
  dispatch({ type: DELETE_SMURF_START });
  axios
    .delete(`http://localhost:3333/smurfs/${smurf.id}`)
    .then(res => {
      console.log(res);
      console.log(res.data);
      dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: DELETE_SMURF_FAILURE,
        payload: `Error ${err.response.status}: ${err.response.statusText}`
      });
    });
};
