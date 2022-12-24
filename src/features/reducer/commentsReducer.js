import {
  ADD_COMMENTS_FULFILLED,
  ADD_COMMENTS_PENDING,
  ADD_COMMENTS_REJECTED,
  GET_COMMENTS_FULFILLED,
  GET_COMMENTS_PENDING,
  GET_COMMENTS_REJECTED,
} from "../types";

const initialState = {
  comments: [],
  text: "",
  error: null,
  addCommetError: null,
  loading: false,
  commentsUpdate: false

};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_COMMENTS_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_COMMENTS_FULFILLED:
      return {
        ...state,
        comments: [...state.comments, ...(state.comments = [])],
        comments: [...state.comments, ...action.payload],
        loading: false,
        error: null,
      };
    case ADD_COMMENTS_PENDING:
      return {
        ...state,
        loading: true,
        addCommetError: null,
      };
    case ADD_COMMENTS_FULFILLED:
      return {
        ...state,
        loading: false,
        addCommetError: null,
      };
    case ADD_COMMENTS_REJECTED:
      return {
        ...state,
        loading: false,
        addCommetError: action.payload,
      };

    default:
      return state;
  }
};
