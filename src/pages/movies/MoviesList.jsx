import React, { useContext } from 'react'
import {useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import './moviesList.css';
import Movies from './Movies'
import { useNavigate } from "react-router-dom";
import { MyContext } from '../store/AppContext';

export const API_KEY = 'ab8d9db136bc327f822c001e051e5465'
const MoviesList = () => {
    
    const token = sessionStorage.getItem("token")
    const navigate = useNavigate()
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState([])
    
    const IMG = `https://image.tmdb.org/t/p/original/`
    const URL = `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=${API_KEY}`
    const getMovies = ()=>{
        axios
        .get(URL)
        .then(res=>{
            setMovies(res.data.results);
 console.log(res);
        })
        .catch(err => console.error("err=>", err))
    }

    useEffect(()=>{
        
        if(!token){
            navigate('/')
        }else{
            getMovies();
        }
    }, [])
  return (
    <div className="cards-container">    
    <div className="cards">
        {movies.length > 0 ?
            movies.map((element) => 
                <section key={element.id}>
                    <Movies 
                    title={element.title} 
                    img={IMG+element.poster_path}
                    idMovie={element.id}
                    />                    
                </section>
            ) : null}
            <section>
               
            </section>
    </div>       
</div>
  )
}

export default MoviesList