import store from "../store/NewsStore";
import {
  ADD_COMMENTS_FULFILLED,
  ADD_COMMENTS_PENDING,
  ADD_COMMENTS_REJECTED,
  COMMENTS_REMOVE_FULFILLED,
  COMMENTS_REMOVE_PENDING,
  COMMENTS_REMOVE_REJECTED,
  GET_COMMENTS_FULFILLED,
  GET_COMMENTS_PENDING,
  GET_COMMENTS_REJECTED,
} from "../types";

export const fetchCommentsGet = () => {
  return async (dispatch) => {
    dispatch({ type: GET_COMMENTS_PENDING });
    try {
      const res = await fetch(`http://localhost:4000/comments`);
      const json = await res.json();
      dispatch({ type: GET_COMMENTS_FULFILLED, payload: json });
    } catch (error) {
      dispatch({
        type: GET_COMMENTS_REJECTED,
        payload: "Ошибка при вывода комментарии",
      });
    }
  };
};

export const fetchAddComment = (newsId, text, user_id) => {
  const state = store.getState();
  return async (dispatch) => {
    dispatch({ type: ADD_COMMENTS_PENDING });
    try {
      const res = await fetch(`http://localhost:4000/comments`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${state.userReducer.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newsId, text, user_id }),
      });
      const json = await res.json();
      console.log(json);

      dispatch({ type: ADD_COMMENTS_FULFILLED, payload: json });
    } catch (error) {
      dispatch({
        type: ADD_COMMENTS_REJECTED,
        payload: "Извините отправка комментарии временно не доступен",
      });
    }
  };
};

export const  fetchCommentsDelete = (id) => {
  const state = store.getState();
  return async (dispatch) => {
dispatch({type: COMMENTS_REMOVE_PENDING })
try {
  const res = await fetch(`http://localhost:4000/comments/${id}`,{
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${state.userReducer.token}`,
        "Content-Type": "application/json"
  }
})
  const json = await res.json()
  dispatch({type: COMMENTS_REMOVE_FULFILLED, payload: json})
} catch (error) {
  dispatch({type: COMMENTS_REMOVE_REJECTED, payload: "Извините ошибка при удаление комментарий"})
}}
}
