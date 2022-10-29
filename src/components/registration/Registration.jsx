import React from 'react';
import { Link } from 'react-router-dom';
import styles from './registration.module.css'

const Registration = () => {
    return (
        <div className={styles.signinBloc}>
           <div className={styles.inputSignin}>
        <div className={styles.signinText}>
          <h4>Регистрация</h4>
        </div>
        <div>
          <input type="text" />
        </div>
        <div>
          <input type="text" />
        </div>
        <div>
          <button className={styles.signinButton}>Регистрация</button>
        </div>
        <div className={styles.signup}>
            <p>Есть аккаунт ?</p>
            <Link className={styles.linkSignup} to="/signin">Войти</Link>
        </div>
        <div className={styles.signup}>
          <p>Остатся как:</p>
          <Link className={styles.linkSignup} to={'/'}>Гость</Link>
          </div>
      </div> 
        </div>
    );
};

export default Registration;