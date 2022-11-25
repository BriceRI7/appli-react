import React from 'react'
import { useParams } from 'react-router-dom'
import { API_KEY } from './MoviesList';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './movieDetail.css'




const MovieDetail = () => {
  const [movie, setmovie] = useState({})
  const params = useParams();
  const URL = `https://api.themoviedb.org/3/movie/${params.idMovie}?api_key=${API_KEY}&language=fr`;
  const IMG = `https://image.tmdb.org/t/p/original/`

  const getmovie = async () => {
    axios
      .get(URL)
      .then(res => {
        setmovie(res.data)
      })
      .catch(err => console.error("err=>", err))
  }

  useEffect(() => {
     getmovie()
  }, [])

  return (
    <div className="movie-detail">
      <h2 className="movie-detail-title">{movie ? movie.title : null}</h2>
      <img src={IMG+movie.poster_path } alt=""  className="movie-detail-img"/>
      <p  className="movie-detail-resum">{movie ? movie.overview : null}</p>
      <p></p>
      <button onClick={() => console.log(params)}>Show Params</button>
    </div>
  )
}

export default MovieDetail