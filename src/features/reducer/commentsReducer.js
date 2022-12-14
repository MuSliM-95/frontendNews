import {
  ADD_COMMENTS_FULFILLED,
  ADD_COMMENTS_PENDING,
  ADD_COMMENTS_REJECTED,
  COMMENTS_REMOVE_FULFILLED,
  COMMENTS_REMOVE_PENDING,
  COMMENTS_REMOVE_REJECTED,
  GET_COMMENTS_FULFILLED,
  GET_COMMENTS_PENDING,
  GET_COMMENTS_REJECTED,
  UPDATE_ERROR_COMMENTS,
} from "../types";

const initialState = {
  comments: [],
  text: "",
  error: null,
  addCommetError: null,
  loading: false,
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
        error: null,
      };
    case ADD_COMMENTS_FULFILLED:
      return {
        ...state,
        loading: false,
        addCommetError: action.payload.error || null,
        error: null,
      };
    case ADD_COMMENTS_REJECTED:
      return {
        ...state,
        loading: false,
        addCommetError: null,
        error: action.payload,
      };
    case UPDATE_ERROR_COMMENTS:
      return {
        ...state,
        addCommetError: null,
      };

      case COMMENTS_REMOVE_PENDING:
        return {
          ...state,
          loading: true,
          error: null,
          addCommetError: null,
        }
        case COMMENTS_REMOVE_FULFILLED:
          return {
            ...state, 
            loading: false,
            error: null,
            addCommetError: action.payload.error || null
          }
          case COMMENTS_REMOVE_REJECTED: 
          return  {
            ...state,
            loading: false,
            error: action.payload,
            addCommetError: null
          }

    default:
      return state;
  }
};
