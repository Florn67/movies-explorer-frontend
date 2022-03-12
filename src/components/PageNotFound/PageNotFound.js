import React from 'react'
import './PageNotFound.css'
import {useHistory} from "react-router-dom"
const PageNotFound = () => {
    const history = useHistory();
    return (
        <div className="page-not-found">
           
           <h1 className="page-not-found__header">404</h1>
           <p className='page-not-found__description'>Страница не найдена</p>
           <button className="page-not-found__button" onClick={history.goBack}>Назад</button>
          
        </div>
    )
};

export default PageNotFound