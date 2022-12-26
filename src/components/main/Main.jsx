import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchByid, fetchNews } from "../../features/AsyncFetch/fetchNews";
import styles from "./main.module.css";
import logo from "../../assets/Default.png";
import { Navigate } from "react-router-dom";
import { readCategoriesRemove } from "../../features/reducer/categoriesReducer";
import loadingLogo from "../../assets/new-loading.gif";

const Main = () => {
  const news = useSelector((state) => state.newsReducer.news);
  const text = useSelector((state) => state.newsReducer.text);
  const error = useSelector((state) => state.newsReducer.error);
  const loading = useSelector((state) => state.newsReducer.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const newsFilter = news.filter(
    (el) => el.name.toLowerCase().indexOf(text.toLowerCase()) !== -1
  );

  const handleNewsLink = (id) => {
    dispatch(fetchByid(id));
    dispatch(readCategoriesRemove());
  };
  if (loading) {
    return (
      <div className={styles.loading}>
        <img className={styles.loadingLogo} src={loadingLogo} alt="preloader" />
      </div>
    );
  }
  if (error) {
    return <Navigate to="/error" />;
  }
  return (
    <div className={styles.newsBlock}>
      {newsFilter.map((el) => {
        return (
          <Link
            onClick={() => handleNewsLink(el._id)}
            key={el._id}
            className={styles.newsBlokc}
            to={"/news"}
          >
            <img
              className={styles.imageNews}
              src={el.imageSrc ? `http://localhost:4000/${el.imageSrc} ` : logo}
              alt="News"
            />
            <b className={styles.textNews}>{el.name}</b>
            <br />
            <div className={styles.textNews}>{el.text}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Main;
