import type { JSX } from "react";
import { useAuth } from "./Auth";
import { Navigate, useNavigate } from "react-router-dom";



export const ProtectedRoute = ({children} : {children:JSX.Element}) => {
    const auth = useAuth()
    if(!auth?.isLogged){
        return <Navigate to='/login' replace />
    }
    return children
}