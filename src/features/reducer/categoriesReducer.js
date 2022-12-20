import {
  CATEGORIESREMOVE,
  CATEGORIES_BLOCK,
  GET_CATEGORIES_FULFILLED,
  GET_CATEGORIES_PENDING,
  GET_CATEGORIES_REJECTED,
} from "../types";

const initialState = {
  error: null,
  loading: true,
  categories: [],
  categoriBlock: false,
};

export const newsCategoriesFindByid = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_CATEGORIES_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_CATEGORIES_FULFILLED:
      return {
        ...state,
        loading: false,
        error: null,
        categories: [...state.categories, ...action.payload],
      };

    case CATEGORIESREMOVE:
      return {
        ...state,
        categories: [],
        categoriBlock: false,
      };
    case CATEGORIES_BLOCK:
      return {
        ...state,
        categoriBlock: true,
      };

    default:
      return state;
  }
};

export const readCategoriesRemove = () => {
  return { type: CATEGORIESREMOVE };
};
export const categoriesBlock = () => {
  return { type: CATEGORIES_BLOCK };
};
