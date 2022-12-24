import React from 'react';                                                        
import { Link } from 'react-router-dom';

const ErrorNews = () => {


    return (
        <div>
            <div>
                <h1>Ошибка 404</h1>
                <div>Скоро все будет исправленно попробуйте чуть позже</div>
                <Link to={"/"}>Обновить</Link>
            </div>
        </div>
    );
};

export default ErrorNews;