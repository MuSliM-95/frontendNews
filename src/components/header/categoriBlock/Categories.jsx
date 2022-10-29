import styles from './categories.module.css'

import React, { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchCategoriesByid } from '../../../features/AsyncFetch/fetch';


const Categories = () => {
   const dispatch = useDispatch()
   const categories = useSelector((state) => state.categories)


   useEffect(() => {
dispatch(fetchCategories())
   },[dispatch])

   const handleReadCateoriesId = (id) => {
    dispatch(fetchCategoriesByid(id))
   }
    return (
        <div className={styles.categoriesBacraund}>
            {categories.map(el => {
                return (
                    <div key={el._id}>
                        <ul>
                            <li onClick={() => handleReadCateoriesId(el._id)} className={styles.el}>{el.name}</li>
                        </ul>
                    </div>
                )
            })}
        </div>
    );
};

export default Categories;