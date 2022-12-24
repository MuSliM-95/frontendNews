import {
  FINDBYID_NEWS_CATEGORIES_FULFILLED,
  FINDBYID_NEWS_CATEGORIES_PENDING,
  FINDBYID_NEWS_CATEGORIES_REJECTED,
  GET_CATEGORIES_FULFILLED,
  GET_CATEGORIES_PENDING,
  GET_CATEGORIES_REJECTED,
} from "../types";

export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch({ type: GET_CATEGORIES_PENDING });
    try {
      const res = await fetch("http://localhost:4000/categories");
      const json = await res.json();
      dispatch({ type: GET_CATEGORIES_FULFILLED, payload: json });
    } catch (error) {
      dispatch({
        type: GET_CATEGORIES_REJECTED,
        payload: "Ошибка при выводе категории",
      });
    }
  };
};

export const fetchCategoriesByid = (id) => {
  return async (dispatch) => {
    dispatch({ type: FINDBYID_NEWS_CATEGORIES_PENDING });
    try {
      const res = await fetch(`http://localhost:4000/news/categories/${id}`);
      const json = await res.json();
      dispatch({
        type: FINDBYID_NEWS_CATEGORIES_FULFILLED,
        payload: json,
      });
    } catch (error) {
      dispatch({
        type: FINDBYID_NEWS_CATEGORIES_REJECTED,
        payload: "Ошибка при выводе категории по id",
      });
    }
  };
};
