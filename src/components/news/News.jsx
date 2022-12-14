import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./news.module.css";
import logo from "../../assets/Default.png";
import Comments from "../../components/comment/Comments";
import comments_Logo from "../../assets/comments.png";
import { Navigate } from "react-router-dom";
import { readCategoriesRemove } from "../../features/reducer/categoriesReducer";
import loadingLogo from "../../assets/new-loading.gif";
import { fetchByid } from "../../features/AsyncFetch/fetchNews";

const News = () => {
  const [commentComponents, setCommentComponents] = useState(false);

  const news = useSelector((state) => state.newsReducer.newsLink);
  const error = useSelector((state) => state.newsReducer.error);
  const loading = useSelector((state) => state.newsReducer.loading);

  const dispatch = useDispatch();
  const handleCommentComponent = () => {
    setCommentComponents(!commentComponents);
    dispatch(readCategoriesRemove());
  };

  console.log(news, news?._id);
  useEffect(() => {
    dispatch(fetchByid(news?._id));
  }, [dispatch]);
  
  if (loading) {
    return (
      <div className={styles.loading}>
        <img className={styles.loadingLogo} src={loadingLogo} alt="preloader" />
      </div>
    );
  }
  if (error) {
    return <Navigate to="/error/" />;
  }
  return (
    <div key={news._id} className={styles.news}>
      <img
        className={styles.img}
        src={news.imageSrc ? `http://localhost:4000/${news.imageSrc}` : logo}
        alt="image"
      />
      <h4 className={styles.text}>{news.name}</h4>
      <h5 className={styles.text}>{news.text}</h5>

      <div>
        <img
          onClick={handleCommentComponent}
          className={styles.comments_Logo}
          src={comments_Logo}
          alt="logo"
        />
        {commentComponents && <Comments />}
      </div>
    </div>
  );
};

export default News;
