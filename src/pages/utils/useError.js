import React from 'react'
import { useState, useEffect } from 'react'

export const useError = () => {
    const [hasError, setHasError ]= useState('');

    useEffect(() =>{
       const error = "response.data.error";
    });

  return {
    error : hasError,
    setHasError :setHasError
  }
    
  
}

export default useError