import * as React from "react";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes
} from "react-router-dom";
import { Navigate } from "react-router-dom"

import Header from "./pages/Header";
import Home from "./pages/Home";
import Categorie from "./pages/movies/Categorie";
import MovieDetail from "./pages/movies/MovieDetail";
import MoviesList from "./pages/movies/MoviesList";
import AppContext, { MyContext } from "./pages/store/AppContext.jsx";
import Signup from "./pages/users/Signup";
import UserInfo from "./pages/users/UserInfo";
import { useContext } from "react";

const AuthRoutes = () =>{
  const {store} = useContext(MyContext)
  
      return(
      store.isAuth ? <Outlet/> : <Navigate to={`/`}/>
        
      )
    };


function App() {

  


  return (
    <BrowserRouter>
    <AppContext>
        <Header/>
      <Routes>
          <Route path="/" element = {<Home />}/>
      <Route element={<AuthRoutes/>}>
          <Route path="/categorie" element = {<Categorie />}/>
          <Route path="/movieslist" element = {<MoviesList />}/>
          <Route path="/user" element = {<UserInfo />}/>
          <Route path="/movieslist/:idMovie" element = {<MovieDetail />}/>
          <Route path="/signup" element={<Signup />}/>
      </Route>
      </Routes>
    </AppContext> 
    </BrowserRouter>

  );
}

export default App;
