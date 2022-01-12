import userActionTypes from "./userActionTypes";

export const fetchUserRequest = () => {
  return {
    type: userActionTypes.FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (users) => {
  return {
    type: userActionTypes.FETCH_USER_SUCCESS,
    payload: users,
  };
};

export const fetchUserFailed = (error) => {
  return {
    type: userActionTypes.FETCH_USER_SUCCESS,
    payload: error,
  };
};

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUserRequest());
    const uri = "https://jsonplaceholder.typicode.com/users";
    try {
      const res = await fetch(uri);
      const users = await res.json();
      dispatch(fetchUserSuccess(users));
    } catch (error) {
      dispatch(fetchUserFailed(error));
    }
  };
};
