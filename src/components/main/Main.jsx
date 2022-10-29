import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchByid, fetchNews } from "../../features/AsyncFetch/fetch";
import styles from "./main.module.css";

const Main = () => {
  const news = useSelector((state) => state.news);
  const text = useSelector((state) => state.text);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const newsFilter = news.filter(
    (el) => el.name.toLowerCase().indexOf(text.toLowerCase()) !== -1
  );

  const handleNewsLink = (id) => {
    dispatch(fetchByid(id));
  };

  return (
    <div className={styles.newsBlock}>
      {newsFilter.map((el) => {
        return (
          <Link
            onClick={() => handleNewsLink(el._id)}
            key={el._id}
            className={styles.newsBlokc}
            to="/news"
          >
            <img
              className={styles.imageNews}
              src={`http://localhost:4000/${el.imageSrc}`}
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
