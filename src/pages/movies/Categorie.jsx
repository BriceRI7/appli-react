import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Categorie = () => {
    const[categories, setCategories] = useState([]);
    const URL= "https://api.themoviedb.org/3/genre/movie/list?api_key=ab8d9db136bc327f822c001e051e5465&language=fr-FR"
    const navigate = useNavigate()
    const getCategories = ()=>{
        axios
        .get(URL)
        .then(res=>{
            setCategories(res.data.genres)
           
        })
        .catch(err => console.error("err=>", err))
    }

    useEffect(()=>{
        getCategories();
    }, [])

  return (
    <div>
        <div>
            {categories.length > 0 ?
                categories.map((element) => <p key={element.id}>{element.name}</p>   
                ) : null}
        </div>        
    </div>
  )
}

export default Categorie