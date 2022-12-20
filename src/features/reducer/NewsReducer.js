import {
  FINDBYID_NEWS_CATEGORIES_FULFILLED,
  FINDBYID_NEWS_CATEGORIES_PENDING,
  FINDBYID_NEWS_CATEGORIES_REJECTED,
  FINDBYID_NEWS_FULFILLED,
  FINDBYID_NEWS_PENDING,
  FINDBYID_NEWS_REJECTED,
  GET_NEWS_FULFILLED,
  GET_NEWS_PENDING,
  GET_NEWS_REJECTED,
  TEXT,
} from "../types";

const initialState = {
  news: [],
  text: "",
  error: null, 
  loading: Boolean,
  categories: [],
  newsLink: "",
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS_PENDING:
      return {
        ...state,
        loading: true, 
        error: null
      };
    case GET_NEWS_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_NEWS_FULFILLED:
      return {
        ...state,
        news: [...state.news, ...(state.news = [])],
        news: [...state.news, ...action.payload],
        loading: true,
        error: null,
      };
    case TEXT:
      return {
        ...state,
        text: action.payload,
      };
    case FINDBYID_NEWS_CATEGORIES_PENDING:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FINDBYID_NEWS_CATEGORIES_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FINDBYID_NEWS_CATEGORIES_FULFILLED:
      return {
        ...state,
        news: [...state.news, ...(state.news = [])],
        news: [...state.news, ...action.payload],
        loading: false,
        error: null,
      };
    case FINDBYID_NEWS_PENDING:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FINDBYID_NEWS_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FINDBYID_NEWS_FULFILLED:
      return {
        ...state,
        newsLink: action.payload,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

export const FilterText = (payload) => {
  return { type: TEXT, payload };
};
