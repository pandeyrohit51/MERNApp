import {
  VALIDATE_USER,
  VALIDATE_USER_SUCCESS,
  VALIDATE_USER_FAILURE,
  ADD_USER,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  LOGOUT
} from "./../actions/types";
const initialState = {
  userDetails: {
    username: "",
    password: ""
  },
  loading: false,
  success: false,
  errorDetails: {},
  error: false,
  getUsersSuccess: false,
  getUsersError: {},
  users: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGOUT:
      return {
        ...initialState
      };
    case VALIDATE_USER:
      return {
        ...state,
        loading: true
      };
    case VALIDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        userDetails: action.payload,
        success: true,
        error: false
      };
    case VALIDATE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        errorDetails: action.error
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        getUsersSuccess: true,
        loading: false
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        getUsersError: action.error,
        getUsersSuccess: false
      };
    case ADD_USER:
      return {
        ...state
      };
    default:
      return state;
  }
}
