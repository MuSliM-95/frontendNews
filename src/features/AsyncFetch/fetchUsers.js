import store from "../store/NewsStore";
import {
  FINDBYID_USERS_FULFILLED,
  FINDBYID_USERS_PENDING,
  FINDBYID_USERS_REJECTED,
  GET_USERS_FULFILLED,
  GET_USERS_PENDING,
  GET_USERS_REJECTED,
  LOGIN_USERS_FULFILLED,
  LOGIN_USERS_PENDING,
  LOGIN_USERS_REJECTED,
  REGISTRATION_USERS_FULFILLED,
  REGISTRATION_USERS_PENDING,
  REGISTRATION_USERS_REJECTED,
} from "../types";

export const fetchRegistration = (nickname, login, password) => {
  return async (dispatch) => {
    dispatch({ type: REGISTRATION_USERS_PENDING });
    try {
      const res = await fetch(`http://localhost:4000/users`, {
        method: "POST",
        body: JSON.stringify({ nickname, login, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await res.json();
      dispatch({ type: REGISTRATION_USERS_FULFILLED, payload: json });
    } catch (error) {
      dispatch({
        type: REGISTRATION_USERS_REJECTED,
        payload: "Ошибка при регистрацци",
      });
    }
  };
};

export const fetchLogin = (login, password) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_USERS_PENDING });
    try {
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });
      const json = await res.json();
      dispatch(
        { type: LOGIN_USERS_FULFILLED, payload: json },
        localStorage.setItem("token", json.token),
        localStorage.setItem("user", json.user)
      );
    } catch (error) {
      dispatch({ type: LOGIN_USERS_REJECTED, payload: "Ошибка авторизации" });
    }
  };
};

export const userFindByid = (id) => {
  return async (dispatch) => {
    const state = store.getState();
    dispatch({ type: FINDBYID_USERS_PENDING });
    try {
      const res = await fetch(`http://localhost:4000/users/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.userReducer.token}`,
        },
      });
      const json = await res.json();
      dispatch({ type: FINDBYID_USERS_FULFILLED, payload: json });
    } catch (error) {
      dispatch({
        type: FINDBYID_USERS_REJECTED,
        payload: "Ошибка при выводе users по id",
      });
    }
  };
};

export const fetchUserGet = () => {
  return async (dispatch) => {
    dispatch({ type: GET_USERS_PENDING });
    try {
      const res = await fetch("http://localhost:4000/users");
      const json = await res.json();
      dispatch({ type: GET_USERS_FULFILLED, payload: json });
    } catch (error) {
      dispatch({
        type: GET_USERS_REJECTED,
        payload: "Ошибка при выводе users",
      });
    }
  };
};
