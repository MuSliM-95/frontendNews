import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userFindByid } from "../../features/AsyncFetch/fetchUsers";
import styles from "./PrivateRoom.module.css";
import logo from "../../assets/images.png";
import { REMOVE } from "../../features/types";
import { personal } from "../../features/reducer/userReducer";

const PrivateRoom = () => {
  const userId = useSelector((state) => state.userReducer.userId);
  const user = useSelector((state) => state.userReducer.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userFindByid(userId));
  }, [dispatch]);

  const handleTokenRemove = () => {
    dispatch({ type: REMOVE });
    dispatch(personal(false));
  };

  const hamdleHome = () => {
    dispatch(personal(false));
  };

  return (
    <div className={styles.conteyner}>
      <div className={styles.PrivateRoom}>
        <div className={styles.headar}>
          <div onClick={hamdleHome} className={styles.Link}>
            Home
          </div>
          <button onClick={handleTokenRemove}>Exit</button>
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
          </div>
          <div className={styles.userblock}>
            <h3>Nickname: {user.nickname}</h3>
            <h3>Surname: {user.surname}</h3>
            <h3>Name: {user.name}</h3>
            <h3>Age: {user.age}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateRoom;
