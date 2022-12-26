import {
  FINDBYID_USERS_FULFILLED,
  FINDBYID_USERS_PENDING,
  FINDBYID_USERS_REJECTED,
  GET_USERS_FULFILLED,
  GET_USERS_PENDING,
  GET_USERS_REJECTED,
  LOGIN_USERS_FULFILLED,
  LOGIN_USERS_PENDING,
  LOGIN_USERS_REJECTED,
  REGISTRATION,
  REGISTRATION_USERS_FULFILLED,
  REGISTRATION_USERS_PENDING,
  REGISTRATION_USERS_REJECTED,
  REMOVE,
  USERS,
} from "../types";

const initialState = {
  userId: localStorage.getItem("user"),
  token: localStorage.getItem("token"),
  loading: false,
  user: [],
  error: null,
  errorRegistration: null,
  errorLogin: null,
  registration: false,
  userById: "",
  findUserError: null
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTRATION_USERS_PENDING:
      return {
        ...state,
        loading: true,
        errorRegistration: null,
        error :null,
        registration: false,
      };
    case REGISTRATION_USERS_FULFILLED:
      return {
        ...state,
        errorRegistration: action.payload.error || null,
        loading: false,
        registration: action.payload.error ? false : true,
        error :null,
      };
    case REGISTRATION_USERS_REJECTED:
      return {
        ...state,
        loading: false,
        errorRegistration: null,
        registration: false,
        error : action.payload,
      };
    case LOGIN_USERS_PENDING:
      return {
        ...state,
        loading: true,
        errorLogin: null,
        error : null,
      };
    case LOGIN_USERS_REJECTED:
      return {
        ...state,
        errorLogin: null,
        error : action.payload,
        loading: false,
        token: null,
      };
    case LOGIN_USERS_FULFILLED:
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.user,
        loading: false,
        errorLogin: action.payload.error || null,
        error : null,
      };
    case REMOVE:
      return {
        ...state,
        userId: localStorage.removeItem("user"),
        token: localStorage.removeItem("token"),
      };
    case REGISTRATION:
      return {
        ...state,
        registration: false,
        error: null

      };

    case FINDBYID_USERS_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FINDBYID_USERS_FULFILLED:
      return {
        ...state,
        userById: action.payload,
        loading: false,
        error: null
      };
    case FINDBYID_USERS_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_USERS_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_USERS_FULFILLED:
      return {
        ...state,
        user: [...state.user, ...(state.user = [])],
        user: [...state.user, ...action.payload],
        loading: false,
        error: null
      };
    case GET_USERS_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case USERS:
      return {
        ...state,
        userPersonal: action.payload,
      };
    default:
      return state;
  }
}

export const personal = (payload) => {
  return { type: USERS, payload };
};
