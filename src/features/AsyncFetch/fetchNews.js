import {
  FINDBYID_NEWS_FULFILLED,
  FINDBYID_NEWS_PENDING,
  FINDBYID_NEWS_REJECTED,
  GET_NEWS_FULFILLED,
  GET_NEWS_PENDING,
  GET_NEWS_REJECTED,
} from "../types";

export const fetchNews = () => {
  return async (dispatch) => {
    dispatch({ type: GET_NEWS_PENDING });
    try {
      const res = await fetch("http://localhost:4000/news");
      const json = await res.json();
      dispatch({ type: GET_NEWS_FULFILLED, payload: json });
    } catch (error) {
      dispatch({ type: GET_NEWS_REJECTED, payload: error.message });
    }
  };
};

export const fetchByid = (id) => {
  return async (dispatch) => {
    dispatch({ type: FINDBYID_NEWS_PENDING });
    try {
      const res = await fetch(`http://localhost:4000/news/${id}`);
      const json = await res.json();
      dispatch({ type: FINDBYID_NEWS_FULFILLED, payload: json });
    } catch (error) {
      dispatch({ type: FINDBYID_NEWS_REJECTED, payload: error.message });
    }
  };
};
