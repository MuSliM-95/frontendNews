import {
  news,
  readAsyncNews,
  readCategories,
  readCategoriesByid,
} from "../reducer/NewsReducer";

export const fetchNews = () => {
  return (dispatch) => {
    fetch("http://localhost:4000/news")
      .then((res) => res.json())
      .then((data) => dispatch(readAsyncNews(data)))
      .catch((data) => dispatch(readAsyncNews(data)));
  };
};

export const fetchCategories = () => {
  return (dispatch) => {
    fetch("http://localhost:4000/categories")
      .then((res) => res.json())
      .then((data) => dispatch(readCategories(data)))
      .catch((data) => dispatch(readCategories(data)));
  };
};

export const fetchCategoriesByid = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:4000/news/categories/${id}`)
      .then((res) => res.json())
      .then((data) => dispatch(readCategoriesByid(data)))
      .catch((data) => dispatch(readCategoriesByid(data)));
  };
};

export const fetchByid = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:4000/news/${id}`)
      .then((res) => res.json())
      .then((data) => dispatch(news(data)))
      .catch((data) => dispatch(news(data)));
  };
};


