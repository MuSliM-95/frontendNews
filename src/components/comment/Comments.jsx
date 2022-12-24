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
  const error = useSelector((state) => state.commentsReducer.addCommetError);
  const news = useSelector((state) => state.newsReducer.newsLink);
  const userId = localStorage.getItem("user");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCommentsGet());
    dispatch(fetchUserGet());
  }, [dispatch]);

  console.log(error);

  if (error) {
    return (
      <>
        <h3>{error}</h3><div></div>
        <Link to="/">Обновить</Link>
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
                <div
                  key={item._id}
                  className={
                    el.user_id === userId
                      ? styles.myCommentsBlock
                      : styles.theyCommentsBlock
                  }
                >
                  {el.user_id === item._id && news._id === el.newsId && (
                    <h4
                      className={
                        el.user_id === userId
                          ? styles.theyComments
                          : styles.myComments
                      }
                    >
                      {item.nickname}
                    </h4>
                  )}
                  <div
                    className={
                      el.user_id === userId
                        ? styles.theyComments
                        : styles.myComments
                    }
                  >
                    {el.user_id === item._id &&
                      news._id === el.newsId &&
                      el.text}
                  </div>
                  {el.user_id === item._id && news._id === el.newsId && (
                    <div
                      className={
                        el.user_id === userId
                          ? styles.theyCommentsTime
                          : styles.myCommentsTime
                      }
                    >
                      {el.time - new Date() > 86400000 ? el.date : el.hour}
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
