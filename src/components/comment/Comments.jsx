import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { fetchCommentsDelete, fetchCommentsGet } from "../../features/AsyncFetch/fetchComments";
import { fetchUserGet } from "../../features/AsyncFetch/fetchUsers";
import Button from "./button/Button";
import styles from "./comments.module.css";
import loadingLogo from "../../assets/new-loading.gif";
import basket from "../../assets/basket.png";
import { UPDATE_ERROR_COMMENTS } from "../../features/types";

const Comments = () => {
  const comments = useSelector((state) => state.commentsReducer.comments);
  const user = useSelector((state) => state.userReducer.user);
  const addCommetError = useSelector(
    (state) => state.commentsReducer.addCommetError
  );
  const error = useSelector((state) => state.commentsReducer.error);
  const news = useSelector((state) => state.newsReducer.newsLink);
  const loading = useSelector((state) => state.commentsReducer.loading);
  const userId = localStorage.getItem("user");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCommentsGet());
    dispatch(fetchUserGet());
  }, [dispatch]);

  const handleUpdateComments = () => {
    dispatch({ type: UPDATE_ERROR_COMMENTS });
  };

  const handleCommentsRemove = (id) => {
    dispatch(fetchCommentsDelete(id));
  };
  if (addCommetError || error) {
    return (
      <div className={styles.errorBlock}>
        <h4>{addCommetError || <Navigate to={"/error"} />}</h4>
        <button className={styles.button} onClick={handleUpdateComments}>
          Обновить
        </button>
      </div>
    );
  }
  return (
    <div>
      {comments.map((el) => {
        return (
          <div key={el._id}>
            {user.map((item) => {
              return (
                <div>
                  {el.user_id === item._id && news._id === el.newsId && (
                    <div>
                      <div className={styles.commentContainer}>
                        <div className={styles.commentsBlock}>
                          <p className={styles.commentText}>{el.text}</p>
                          <img
                            className={styles.basketLogo}
                            src={basket}
                            alt="basketLogo"
                            onClick={() => handleCommentsRemove(el._id)}
                          />
                        </div>
                        <div className={styles.myNameBlock}>
                          <h3 className={styles.nickname}>{item.nickname}</h3>
                          <h6>
                            {el.time - new Date() > 86400000
                              ? el.date
                              : el.hour}
                          </h6>
                        </div>
                      </div>
                      <hr className={styles.hr} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
      <div className={styles.loading}>
        <img src={loading && loadingLogo} alt="" />
      </div>
      <Button news={news} userId={userId} />
    </div>
  );
};

export default Comments;
