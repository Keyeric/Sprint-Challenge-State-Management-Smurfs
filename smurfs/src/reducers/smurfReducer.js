import {
  GET_SMURF_START,
  GET_SMURF_SUCCESS,
  GET_SMURF_FAILURE,
  SUBMIT_SMURF_START,
  SUBMIT_SMURF_SUCCESS,
  SUBMIT_SMURF_FAILURE
} from "../actions/smurfActions";

const initialState = {
  isSubmitting: false,
  isFetching: false,
  error: "",
  smurfs: [
    {
      name: "Lazy",
      age: 150,
      height: "5.1",
      id: 1
    }
  ]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_SMURF_START:
      return {
        ...state,
        isFetching: true
      };
    case GET_SMURF_SUCCESS:
      return {
        ...state,
        isFetching: false,
        smurfs: action.payload
      };
    case GET_SMURF_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };

    case SUBMIT_SMURF_START:
      return {
        ...state,
        isSubmitting: true
      };
    case SUBMIT_SMURF_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
        smurfs: [...state.smurfs, action.payload]
      };
    case SUBMIT_SMURF_FAILURE:
      return {
        ...state,
        isSubmitting: false,
        error: action.payload
      };
    default:
      return state;
  }
}
export default reducer;
