import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userFindByid } from "../../features/AsyncFetch/fetchUsers";
import styles from "./PrivateRoom.module.css";
import logo from "../../assets/images.png";
import { REMOVE } from "../../features/types";
import { Link, Navigate } from "react-router-dom";
import loadingLogo from "../../assets/new-loading.gif";

const PrivateRoom = () => {
  const userId = useSelector((state) => state.userReducer.userId);
  const user = useSelector((state) => state.userReducer.userById);
  const error = useSelector((state) => state.userReducer.error);
  const loading = useSelector((state) => state.userReducer.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userFindByid(userId));
  }, [dispatch]);

  const handleTokenRemove = () => {
    dispatch({ type: REMOVE });
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        <img className={styles.loadingLogo} src={loadingLogo} alt="preloader" />
      </div>
    );
  }
  if (error) {
    return <Navigate to={"/error"} />;
  }
  return (
    <div className={styles.conteyner}>
      <div className={styles.PrivateRoom}>
        <div className={styles.headar}>
          <Link to={"/mainPage"} className={styles.Link}>
            Home
          </Link>
          <button className={styles.exit} onClick={handleTokenRemove}>
            Exit
          </button>
        </div>
        <div>
          <div className={styles.logoBloc}>
            <img
              className={styles.image}
              src={
                user.imageSrc ? `http://localhost:4000/${user.imageSrc}` : logo
              }
              alt=""
            />
            <h3 className={styles.nickname}>{user.nickname}</h3>
          </div>
          {
            <div className={styles.userblock}>
              <h3>Surname: {user.surname}</h3>
              <h3>Name: {user.name}</h3>
              <h3>Age: {user.age}</h3>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default PrivateRoom;
