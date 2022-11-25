import React from 'react'
import './styleForm.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
//import { useParams } from 'react-router-dom'

const Signup = () => {
    const URL = `https://api-ri7.herokuapp.com/api/users/register`;

    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [mail, setMail] = useState("");
    const [ville, setVille]= useState("");
    const [codePostal, setCodePostal] = useState("");
    const [password, setPassWord] = useState("");
    

    const postUser = (event)=>{
        event.preventDefault()
        const user= {
            email: mail,
            password: password,
            firstname: prenom,
            lastname: nom,
            city: ville,
            postalCode: codePostal
        }
        axios
            .post(URL, user)
            .then(res => {
               
              console.log("Salut c posté");
            })
            .catch(err => console.error("err=>", err));
    }

    useEffect(()=>{
   
    }, [])

  return (
    <form onSubmit={postUser}>
        <div className="form">
            <label>Votre Email</label>
            <input type="email" value ={mail} onChange={(e) => setMail(e.target.value)}/>
            <label>Votre Mot de passe</label>
            <input type="password"  value ={password} onChange={(e)=>setPassWord(e.target.value)}/>
            <label>Votre Nom</label>
            <input type="text"  value ={nom} onChange={(e) => setNom(e.target.value)}/>
            <label>Votre Prenom</label>
            <input type="text"  value ={prenom} onChange={(e) => setPrenom(e.target.value)}/>
            <label>Votre Ville</label>
            <input type="text"  value ={ville}  onChange={(e) => setVille(e.target.value)}/>
            <label>Votre Code Postal</label>
            <input type="text"  value ={codePostal} onChange={(e) => setCodePostal(e.target.value)}/>
            <button>signup</button>  
        </div>
    </form>

  )
}

export default Signup