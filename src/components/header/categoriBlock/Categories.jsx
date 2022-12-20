import styles from "./categories.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategoriesByid,
} from "../../../features/AsyncFetch/fetchCategories";
import { Link } from "react-router-dom";
import { readCategoriesRemove } from "../../../features/reducer/categoriesReducer";

const Categories = () => {
  const dispatch = useDispatch();

  const categories = useSelector(
    (state) => state.newsCategoriesFindByid.categories
  );
  const error = useSelector((state) => state.newsCategoriesFindByid.error);
 

  // console.log(error);

  

  const handleReadCateoriesId = (id) => {
    dispatch(fetchCategoriesByid(id));
    dispatch(readCategoriesRemove())
  };

  if (error) {
    return (
      <>
        <h1>Error404...</h1>
        <Link to={"/"}></Link>
      </>
    );
  }
  return (
    <div className={styles.categoriesBacraund}>
      {categories.map((el) => {
        return (
          <div key={el._id} >
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
