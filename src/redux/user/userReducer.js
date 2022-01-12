import userActionTypes from "./userActionTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userActionTypes.FETCH_USER_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case userActionTypes.FETCH_USER_FAILED:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;