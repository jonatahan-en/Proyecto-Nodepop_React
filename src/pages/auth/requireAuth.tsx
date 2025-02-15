import {  ReactNode } from "react";
import { useAuth } from "./context";
import { Navigate, useLocation } from "react-router-dom";
// crea para que el usuario no pueda acceder a la pagina de productos si no esta logeado
function RequireAuth({ children }: {children: ReactNode}){

    const {isLogged} = useAuth();
    const location = useLocation();

    return isLogged ? (
        children 
    ) : (
        <Navigate to="/login"  state={{from: location.pathname}}
        replace/>
    );

}
export default RequireAuth;