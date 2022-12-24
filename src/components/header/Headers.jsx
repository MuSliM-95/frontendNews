import React, { useEffect, useState } from "react";
import styles from "./headers.module.css";
import logoFlag from "../../assets/logo3.png";
import user from "../../assets/logo_user.png";
import search from "../../assets/images.search.png";
import { useDispatch, useSelector } from "react-redux";
import { FilterText } from "../../features/reducer/newsReducer";
import Categories from "./categoriBlock/Categories";
import { fetchNews } from "../../features/AsyncFetch/fetchNews";
import { Link } from "react-router-dom";
import {
  categoriesBlock,
  readCategoriesRemove,
} from "../../features/reducer/categoriesReducer";
import { fetchCategories } from "../../features/AsyncFetch/fetchCategories";


const Headers = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const token = useSelector((state) => state.userReducer.token);
  const categoriBlock = useSelector(
    (state) => state.newsCategoriesFindByid.categoriBlock
  );


  if (text) {
    dispatch(readCategoriesRemove());
  }
  const handleVelue = (e) => {
    setText(e.target.value);
    dispatch(FilterText(text));
    
  };



  const handleCategories = () => {
    
      dispatch(categoriesBlock());
      dispatch(fetchCategories());
      
  
  };
  const handleCategoriesRemove = () => {
  
      dispatch(readCategoriesRemove());
   
  };

  const handleNews = () => {
    dispatch(fetchNews());
    dispatch(readCategoriesRemove());
  };


  
  useEffect(() => {
    dispatch(FilterText(text));
  }, [text]);

  return (
    <div className={styles.header}>
      <div onClick={handleNews} className={styles.flagbloc}>
        <Link className={styles.Link} to={"mainPage"}>
          <p className={styles.header_text}>NEWS</p>
          <img className={styles.flag} src={logoFlag} alt="logo" />
        </Link>
      </div>
      <div>
        <input
          className={styles.input}
          type="text"
          value={text}
          onChange={ handleVelue}
        />
        <img className={styles.search} src={search} alt="images.png" />
      </div>
      <div
        onClick={categoriBlock ? handleCategoriesRemove : handleCategories}
        className={styles.header_text2}
        
      >
        Сategories
      </div>
      {categoriBlock && (
        <div className={styles.categories}>
          <Categories />
        </div>
      )}{" "}
      <Link
        to={ "/personalArea/"}
        className={styles.logo_user_bloc}
        onClick={handleNews}
      >
        <img className={styles.user_logo} src={user} alt="logo" />
        <p className={styles.header_text}>Personal Area</p>
      </Link>
  
    </div>
  );
};

export default Headers;
