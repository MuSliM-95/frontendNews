import styles from "./categories.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesByid } from "../../../features/AsyncFetch/fetchCategories";
import { Navigate } from "react-router-dom";
import { readCategoriesRemove } from "../../../features/reducer/categoriesReducer";
import loadingLogo from "../../../assets/new-loading.gif";

const Categories = () => {
  const dispatch = useDispatch();

  const categories = useSelector(
    (state) => state.newsCategoriesFindByid.categories
  );
  const error = useSelector((state) => state.newsCategoriesFindByid.error);
  const loading = useSelector((state) => state.newsCategoriesFindByid.loading);

  const handleReadCateoriesId = (id) => {
    dispatch(fetchCategoriesByid(id));
    dispatch(readCategoriesRemove());
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        <img className={styles.loadingLogo} src={loadingLogo} alt="preloader" />
      </div>
    );
  }
  if (error) {
    return <div className={styles.error}>Ошибка...</div>
  }
  return (
    <div className={styles.categoriesBacraund}>
      {categories.map((el) => {
        return (
          <div key={el._id}>
            <ul>
              <li
                onClick={() => handleReadCateoriesId(el._id)}
                className={styles.el}
              >
                {el.name}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
