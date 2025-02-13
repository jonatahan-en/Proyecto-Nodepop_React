import { ReactNode, useState } from "react";
import { AuthContext } from "./context";

interface Props {
    defaultIsLogged : boolean;
    children: ReactNode;
}

export function AuthProvider ({defaultIsLogged,children}: Props) {
        const[isLogged, setIsLogged] = useState(defaultIsLogged);
    const handerLogin = () => {
        setIsLogged(true);
    };

    const handerLogout = () => {
        setIsLogged(false);
    }
    const authValue = {
        isLogged,
        onLogin: handerLogin,
        onLogout: handerLogout,
    };
    return ( 
    < AuthContext.Provider value={authValue}>{children}
    </AuthContext.Provider>
    );
}
