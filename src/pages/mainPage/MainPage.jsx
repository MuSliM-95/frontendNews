import React from 'react';
import Main from '../../components/main/Main';
import styles from './mainPage.module.css'

const MainPage = () => {
    return (
        <div className={styles.conteyner}>
            <Main/>
        </div>
    ); 
};

export default MainPage;