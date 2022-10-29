import React, { useEffect, useState } from "react";
import styles from "./headers.module.css";
import logoFlag from "../../assets/logo3.png";
import user from "../../assets/logo_user.png";
import search from "../../assets/images.png";
import { useDispatch } from "react-redux";
import {
  FilterText,
  readCategoriesRemove,
} from "../../features/reducer/NewsReducer";
import Categories from "./categoriBlock/Categories";
import { fetchNews } from "../../features/AsyncFetch/fetch";
import { Link } from "react-router-dom";

const Headers = () => {
  const [text, setText] = useState("");
  const [categoriBlock, setCategoriBlock] = useState(false);
  const [personalArea, setPersonalArea] = useState(false);
  const dispatch = useDispatch();

  const handleVelue = (e) => {
    setText(e.target.value);
    dispatch(FilterText(text));
  };

  const handleCategories = () => {
    setCategoriBlock(!categoriBlock);
  };

  const handleCategoriesRemove = () => {
    setCategoriBlock(!categoriBlock);
    dispatch(readCategoriesRemove());
  };

  const handleNews = () => {
    dispatch(fetchNews());
    setCategoriBlock(false);
  };

  const handlePersonalArea = () => {
    setPersonalArea(!personalArea);
  };
  const handlePersonalAreaRemove = () => {
    setPersonalArea(!personalArea);
  };
  useEffect(() => {
    dispatch(FilterText(text));
  }, [text]);

  return (
    <div className={styles.header}>
      <div onClick={handleNews} className={styles.flagbloc}>
        <Link className={styles.Link} to={"mainPage"}>
          <p className={styles.header.text}>NEWS</p>
          <img className={styles.flag} src={logoFlag} alt="logo" />
        </Link>
      </div>
      <div>
        <input
          className={styles.input}
          type="text"
          value={text}
          onChange={handleVelue}
        />
        <img className={styles.search} src={search} alt="images.png" />
      </div>
      <div
        onClick={categoriBlock ? handleCategories : handleCategoriesRemove}
        className={styles.header_text2}
      >
        Сategories
      </div>
      {categoriBlock && (
        <div className={styles.categories}>
          <Categories />
        </div>
      )}
      <Link className={styles.privateRoom} to={"privateRoom"}>
        <div onClick={handlePersonalArea} className={styles.logo_user_bloc}>
          <img className={styles.user_logo} src={user} alt="logo" />
          <p className={styles.header_text}>Personal Area</p>
        </div>
      </Link>
    </div>
  );
};

export default Headers;
