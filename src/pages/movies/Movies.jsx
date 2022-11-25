import React, { useContext } from 'react'
import './movies.css'
import { Link } from 'react-router-dom'
import { MyContext } from '../store/AppContext';

const Movies = (props) => {

    const {store, setStore} = useContext(MyContext);


    return(
        <Link to={`${props.idMovie}`}>
            <div className="card">
                <h3 className="title">{props.title}</h3>
                <img src={props.img} alt="" />
                <p>{props.detail}</p>
            </div>
        </Link>
    )
    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
}

export default Movies