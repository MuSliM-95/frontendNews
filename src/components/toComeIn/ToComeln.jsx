import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchLogin } from "../../features/AsyncFetch/fetchUsers";
import styles from "./toComeln.module.css";
import loadingLogo from "../../assets/new-loading.gif";
import { REGISTRATION } from "../../features/types";

const ToComeln = () => {
  const error = useSelector((state) => state.userReducer.error);
  const loading = useSelector((state) => state.userReducer.loading);

  const dispatch = useDispatch();

  const [textLogin, setTextLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleTextLogin = (e) => {
    setTextLogin(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    dispatch(fetchLogin(textLogin, password));
    setTextLogin("");
    setPassword("");
  };

  const handleRegistrarionBooleon = () => {
    dispatch({ type: REGISTRATION });
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        <img className={styles.loadingLogo} src={loadingLogo} alt="preloader" />
      </div>
    );
  }
  return (
    <div className={styles.signinBloc}>
      <div className={styles.inputSignin}>
        <div className={styles.signinText}>
          <h4>Авторизация на Сайт</h4>
        </div>
        <div>
          <input
            placeholder="Ведите логин"
            type="text"
            value={textLogin}
            onChange={handleTextLogin}
          />
        </div>
        <div>
          <input
            placeholder="Ведите пароль"
            type="password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <div>
          <div className={styles.error}>{error}</div>
          <button onClick={handleLogin} className={styles.signinButton}>
            Войти
          </button>
        </div>
        <div className={styles.signup}>
          <p>Нет аккаунта ?</p>
          <Link
            onClick={handleRegistrarionBooleon}
            className={styles.linkSignup}
            to="/signup"
          >
            Зарегистрироваться
          </Link>
        </div>
        <div className={styles.signup}>
          <p>Остатся как:</p>
          <Link className={styles.linkSignup} to={"/"}>
            Гость
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToComeln;
