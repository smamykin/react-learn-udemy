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
  } else if (action.type === UserActionTypes.SIGN_IN_SUCCESS) {
    return {
      ...state,
      currentUser: null,
      error: null,
    }
  } else if ([UserActionTypes.SIGN_OUT_FAILURE, UserActionTypes.SIGN_IN_FAILURE, UserActionTypes.SIGN_UP_FAILURE].includes(action.type)) {
    return {
      ...state,
      error: action.payload,
    }
  } else {
    return state;
  }
}

export default userReducer;