import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const AuthWrapper=({children})=>{
    const authStatus=useSelector(store=>store.authReducer.auth)
     console.log(authStatus)
     const location=useLocation()
    if(authStatus){
        return children;
    }
    return <Navigate to="/login" replace="true" state={location} />


}



export default AuthWrapper;