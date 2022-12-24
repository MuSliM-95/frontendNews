import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  userFindByid } from "../../features/AsyncFetch/fetchUsers";
import styles from "./PrivateRoom.module.css";
import logo from "../../assets/images.png";
import { REMOVE } from "../../features/types";
import { Link } from "react-router-dom";

const PrivateRoom = () => {
  const userId = useSelector((state) => state.userReducer.userId);
  const user = useSelector((state) => state.userReducer.userById);

  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(userFindByid(userId));
  }, [dispatch]);

  const handleTokenRemove = () => {
    dispatch({ type: REMOVE });
    
  };

  return (
    <div className={styles.conteyner}>
      <div className={styles.PrivateRoom}>
        <div className={styles.headar}>
          <Link to={"/mainPage"} className={styles.Link}>
            Home
          </Link>
          <button className={styles.exit} onClick={handleTokenRemove}>Exit</button>
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
         { <div className={styles.userblock}>
            <h3>Surname: {user.surname}</h3>
            <h3>Name: {user.name}</h3>
            <h3>Age: {user.age}</h3>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default PrivateRoom;
