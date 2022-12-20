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
  loading: false,
  token: localStorage.getItem("token"),
  user: [],
  error: null,
  registration: false,
  userPersonal: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTRATION_USERS_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case REGISTRATION_USERS_FULFILLED:
      return {
        ...state,
        error: null,
        loading: false,
        registration: true,
      };
    case REGISTRATION_USERS_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LOGIN_USERS_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_USERS_REJECTED:
      return {
        ...state,
        error: action.payload,
        loading: false,
        token: null,
      };
    case LOGIN_USERS_FULFILLED:
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.user,
        loading: false,
        error: null,
        registration: false,
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
      };

    case FINDBYID_USERS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case FINDBYID_USERS_FULFILLED:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
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
        error: null,
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
          userPersonal: action.payload
        }
    default:
      return state;
  }
}

export const personal = (payload) => {
  return { type: USERS, payload };
};
