import store from "../store/NewsStore";
import {
  ADD_COMMENTS_FULFILLED,
  ADD_COMMENTS_PENDING,
  ADD_COMMENTS_REJECTED,
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
      console.log(error);
      dispatch({ type: GET_COMMENTS_REJECTED, payload: error.message });
    }
  };
};

export const fetchAddComment = (newsId, text, user_id) => {
  const state = store.getState();
  console.log(`Bearer ${state.userReducer.token}`);
  return async (dispatch) => {
    dispatch({type: ADD_COMMENTS_PENDING})
    try {
      const res = await fetch(`http://localhost:4000/comments`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${state.userReducer.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({newsId, text, user_id})
      })
      const json = await res.json();
      console.log(json);
      
      dispatch({type: ADD_COMMENTS_FULFILLED})
    } catch (error) {
      dispatch({type: ADD_COMMENTS_REJECTED, payload: error})
    }
  };
};
