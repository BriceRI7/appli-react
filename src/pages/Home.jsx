import React from 'react'
import DrawerToggle from './DrawerToggle'
import Signup from './users/Signup'
import Login from './users/Login'
import { Link } from "react-router-dom";
import './home.css'



const Home = () => {
  return (
    <div className='home'>
     
      {/* <Signup/> */}
      <Login /> 
      <li className='souscription'><Link to="/signup">Inscrivez-vous</Link></li>
    </div>
  )
}

export default Home