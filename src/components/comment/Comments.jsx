import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCommentsGet } from "../../features/AsyncFetch/fetchComments";
import { fetchUserGet } from "../../features/AsyncFetch/fetchUsers";
import Button from "./button/Button";
import styles from "./comments.module.css";



const Comments = () => {
  const comments = useSelector((state) => state.commentsReducer.comments);
  const user = useSelector((state) => state.userReducer.user);
  const error = useSelector((state) => state.commentsReducer.error);
  const news = useSelector((state) => state.newsReducer.newsLink);
  const userId = localStorage.getItem("user");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCommentsGet());
    dispatch(fetchUserGet());
    
  }, [comments]);

  if (error) {
    return (
      <>
        <h1>Error404...</h1>
        <Link to={"/news"}>Обновить</Link>
      </>
    );
  }
  return (
    <div>
      {comments.map((el) => {
        return (
          <div key={el._id}>
            {user.map((item) => {
              return (
                <div key={item._id}>
                  {el.user_id === item._id && news._id === el.newsId && (
                    <h4 className={styles.comments}>{item.nickname}</h4>
                  )}
                  <div className={styles.comments}>
                    {el.user_id === item._id &&
                      news._id === el.newsId &&
                      el.text}
                  </div>
                  {el.user_id === item._id && news._id === el.newsId && (
                    <div className={styles.commentsTime}>
                      {el.time - new Date() > 86400000  ? el.date : el.hour} 
                    </div>
                    
                  )}
        {el.user_id === item._id && news._id === el.newsId && <hr />}
                </div>
              );
            })}
          </div>
        );
      })}
      <Button news={news} userId={userId} />
    </div>
  );
};

export default Comments;
