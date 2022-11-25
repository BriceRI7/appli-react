import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { MyContext } from '../store/AppContext';
import { useError } from '../utils/useError';
import './styleForm.css';

const Login = () => {


    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");
    const navigate = useNavigate()
    const {error, setHasError} = useError()
    const {store, setStore} = useContext(MyContext)
    let token = '';
    const user = {
        email,
        password,
    }
    const URL = `https://api-ri7.herokuapp.com/api/users/login`
   
    const login = (event) => {
        event.preventDefault();
        axios
            .post(URL, user)
            .then(res => {
                token = res.data.token
                sessionStorage.setItem('token', token)
                store.isAuth= true;
                navigate('/movieslist')
            })
            .catch(err => setHasError(err.response.data.error));
    }

    useEffect(() => {
       
    }, [])

    return (
        <form onSubmit={login}>
            <p>{store.theme}</p>
            <div className="form">
                <p>{error}</p>
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Mot de passe</label>
                <input type="password" value={password} onChange={(e) => setPassWord(e.target.value)} />
                <button>Connctez-vous</button>
            </div>
        </form>

    )
}

export default Login