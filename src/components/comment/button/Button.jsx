import styles from "./button.module.css";
import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { fetchAddComment, fetchCommentsGet } from "../../../features/AsyncFetch/fetchComments";


const Button = ({ news, userId}) => {

  const [textComments, setTextComments] = useState("");
  
 

  const dispatch = useDispatch();

  const handleValue = (e) => {
    setTextComments(e.target.value);
  };
  const addComment = (newsId, comment, id) => {
    dispatch(fetchAddComment(newsId, comment, id));
    setTextComments("");
    dispatch(fetchCommentsGet());
  };
  return (
    <div>
      <div className={styles.inputBlock}>
        <input
          className={styles.commentInput}
          type="text"
          value={textComments}
          onChange={handleValue}
        />
        <button
          onClick={() => addComment(news._id, textComments, userId)}
          className={styles.buttonCommentAdd}
        >
          Отправит
        </button>
      </div>
    </div>
  );
};

export default Button;
