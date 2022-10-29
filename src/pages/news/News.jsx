import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./news.module.css";

const News = () => {
  const news = useSelector((state) => state.newsLink);
  const [textComments, setTextComments] = useState('')
  
const handleValue = (e) => {
 setTextComments(e.target.value)

}

const addComment = () => {
  setTextComments('')
}
  return (
    <div className={styles.news}>
      <img
        className={styles.img}
        src={`http://localhost:4000/${news.imageSrc}`}
        alt="image"
      />
      <h4 className={styles.text}>{news.name}</h4>
      <h5 className={styles.text}>{news.text}</h5>
      <div className={styles.commetntBlock}>
        <input className={styles.commentInput} type="text" value={textComments} onChange={handleValue}/>
        <button onClick={ () => addComment(news._id, textComments,  )} className={styles.buttonCommentAdd}>Отправит</button>
      </div>
    </div>
  );
};

export default News;
