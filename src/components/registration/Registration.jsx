import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { fetchRegistration } from "../../features/AsyncFetch/fetchUsers";
import styles from "./registration.module.css";
import loadingLogo from "../../assets/new-loading.gif";

const Registration = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.userReducer.loading);
  const errorRegistration = useSelector((state) => state.userReducer.errorRegistration);
  const error = useSelector((state) => state.userReducer.error);

  const [passwordError, setPasswordError] = useState("");
  const [niсk, setNiсk] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handlevalueNick = (e) => {
    setNiсk(e.target.value);
  };
  const handlevalueLogin = (e) => {
    setLogin(e.target.value);
  };
  const handlevaluePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleRegistration = () => {
    if (niсk[0] !== " " && login[0] !== " " && password[0] !== " ") {
      if (password.length < 6) {
        setPasswordError("Пороль не должен быть меньще 6 символов");
        return setTimeout(() => {
          setPasswordError("");
        }, 1000);
      }
    }
    dispatch(fetchRegistration(niсk, login, password));
    setNiсk("");
    setLogin("");
    setPassword("");
  };
  if (loading) {
    return (
      <div className={styles.loading}>
        <img className={styles.loadingLogo} src={loadingLogo} alt="preloader" />
      </div>
    );
  }
  if(error) {
   return <Navigate to={'/error'}/>
  }
  return (
    <div className={styles.signinBloc}>
      <div className={styles.inputSignin}>
        <div className={styles.signinText}>
          <h4>Регистрация</h4>
        </div>
        <div>
          <input
            placeholder="Придумайте ник"
            type="text"
            value={niсk}
            onChange={handlevalueNick}
            required
          />
        </div>
        <div>
          <input
            placeholder="Придумайте логин"
            type="text"
            value={login}
            onChange={handlevalueLogin}
            required
          />
        </div>
        <div>
          <input
            placeholder="Придумайте пороль"
            type="password"
            value={password}
            onChange={handlevaluePassword}
            required
          />
        </div>
        <div className={styles.error}>{errorRegistration || passwordError}</div>
        <div>
          <button onClick={handleRegistration} className={styles.signinButton}>
            Регистрация
          </button>
        </div>
        <div className={styles.signup}>
          <p>Есть аккаунт ?</p>
          <Link className={styles.linkSignup} to="/signin">
            Войти
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

export default Registration;
