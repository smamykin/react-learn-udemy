import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  if (action.type === UserActionTypes.SIGN_IN_SUCCESS) {
    return {
      ...state,
      currentUser: action.payload,
      error: null,
    };
  } else if (action.type === UserActionTypes.SIGN_IN_FAILURE) {
    return {
      ...state,
      error: action.payload,
    }
  } else {
    return state;
  }
}

export default userReducer;