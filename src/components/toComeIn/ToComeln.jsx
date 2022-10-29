import React from "react";
import { Link } from "react-router-dom";
import styles from "./toComeln.module.css";

const ToComeln = () => {
  return (
    <div className={styles.signinBloc}>
      <div className={styles.inputSignin}>
        <div className={styles.signinText}>
          <h4>Авторизация на Сайт</h4>
        </div>
        <div>
          <input type="text" />
        </div>
        <div>
          <input type="text" />
        </div>
        <div>
          <button className={styles.signinButton}>Войти</button>
        </div>
        <div className={styles.signup}>
            <p>Нет аккаунта ?</p>
            <Link className={styles.linkSignup} to="/signup">Зарегистрироваться</Link>
        </div>
        <div className={styles.signup}>
          <p>Остатся как:</p>
          <Link className={styles.linkSignup} to={'/'}>Гость</Link>
          </div>
      </div>
    </div>
  );
};

export default ToComeln;
