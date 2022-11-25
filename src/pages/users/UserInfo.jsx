import React from 'react'
import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import { MyContext } from '../store/AppContext'

const UserInfo = () => {
    const URL = `https://api-ri7.herokuapp.com/api/users/profile`
    const token = sessionStorage.getItem('token');
   // const [user, setUser] = useState({})
    const {user, setUser} = useContext(MyContext)
    const getUser = () => {
        axios
            .get(URL, { headers: { 
                Authorization: `Bearer ${token}` 
            }})
            .then(res => {         
                setUser(res.data)
            })
            .catch(err => console.error("err=>", err))
    }
    
    useEffect(() => {
        getUser()
    }, [])

    const updateUser = (e) => {
        e.preventDefault()
        axios
        .put(URL, user, { headers: { 
            Authorization: `Bearer ${token}` 
        }})
        .then(res => {    
            console.log(res.data);     
            setUser(res.data)
        })
        .catch(err => console.error("err=>", err))
    }



    return (
        <form onSubmit={updateUser}>
        <div className="form">
            <label>Votre Email</label>
            <input type="email" value ={user.email} onChange={(e) => setUser(e.target.value)}/>
            <label>Votre Mot de passe</label>
            <input type="password"  value ={user.password} onChange={(e)=>setUser( e.target.value)}/>
            <label>Votre Nom</label>
            <input type="text"  value ={user.firstname} onChange={(e) => setUser({...user, firstname:e.target.value})}/>
            <label>Votre Prenom</label>
            <input type="text"  value ={user.lastname} onChange={(e) => setUser({...user, lastname:e.target.value})}/>
            <label>Votre Ville</label>
            <input type="text"  value ={user.city}  onChange={(e) => setUser({...user, city:e.target.value})}/>
            <label>Votre Code Postal</label>
            <input type="text"  value ={user.postalCode} onChange={(e) => setUser({...user, postalCode :e.target.value})}/>
            <button>Modifier votre Profil</button>  
        </div>
    </form>
    )
}

export default UserInfo