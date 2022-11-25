import React from 'react';
import {createContext} from "react";
import {useState} from "react";


export const MyContext = createContext(null);


const AppContext = ({children}) => {

    const [store, setStore] = useState({
        isAuth: false,
        theme: 'light' || 'dark' ,
    });

    const [user, setUser] =useState({
            email: '',
            password: '',
            firstname: '',
            lastname: '',
            city: '',
            postalCode: ''
        
    })



    return (
        <MyContext.Provider value={
            {
                store, 
                setStore, 
                user, 
                setUser 
            }
        }>
            {children}
        </MyContext.Provider>
        
    )
}

export default AppContext