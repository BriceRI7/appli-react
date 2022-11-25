import React, { useContext, useEffect } from 'react'
import { Link } from "react-router-dom";
import './header.css'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { MyContext } from './store/AppContext';
import profil from '../assets/img/utilisateur.png'

const Header = () => {
  const token = sessionStorage.getItem("token");
  const {user, setUser} = useContext(MyContext);
  const {store, setStore} = useContext(MyContext);
  //const [alignment, setAlignment] = React.useState('web');

  const isAuth = store.isAuth;

  const handleChange = (event) => {
    let newTheme = event.target.value
    setStore({...store, theme: newTheme});
  };



  return (
    <header className={store.theme}>   
        <div >
        <ToggleButtonGroup
          color="primary"
          value={store}
          className="button-toggle"
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
        <ToggleButton value="dark" >Dark</ToggleButton>
        <ToggleButton value="light">Light</ToggleButton>
    </ToggleButtonGroup>

            <ul className="nav">
              <li><Link to="/">Home</Link></li>
              <li>{isAuth ? <Link to="/categorie">Categorie</Link> : ''}</li> 
              <li>{isAuth ? <Link to="/movieslist">Film</Link> : ''}</li> 
              <li>{isAuth ? <Link to="/user">
                <img className="user-icon" src={profil} alt="user" />
                <p>{user.firstname}</p>
                <p>{user.lastname}</p>
              </Link> : ''}</li> 
            </ul>
        </div>
    </header>
  )
}

export default Header