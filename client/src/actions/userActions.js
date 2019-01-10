import {
  VALIDATE_USER,
  VALIDATE_USER_SUCCESS,
  VALIDATE_USER_FAILURE,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  LOGOUT
} from "./types";
import axios from "axios";
export const validateUser = user => dispatch => {
  dispatch(setUserLoading());
  axios
    .post("/api/users/validateUser", user)
    .then(res =>
      dispatch({ type: VALIDATE_USER_SUCCESS, payload: res.data[0] })
    )
    .catch(error =>
      dispatch({ type: VALIDATE_USER_FAILURE, error: error.response })
    );
};
export const addUser = item => dispatch => {
  axios.post("/api/users", item).then(res => dispatch(getUsers()));
};
export const getUsers = () => dispatch => {
  dispatch(setUserLoading());
  axios
    .get("/api/users")
    .then(users => {
      dispatch({ type: GET_USERS_SUCCESS, payload: users.data });
    })
    .catch(error => {
      dispatch({ type: GET_USERS_FAILURE, error: error.response });
    });
};
export const setUserLoading = () => {
  return {
    type: VALIDATE_USER
  };
};
export const logOut = () => dispatch => {
  dispatch({ type: LOGOUT });
};
