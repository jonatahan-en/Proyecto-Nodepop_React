import { createContext, useContext } from "react";

interface AuthContextValue {
    isLogged: boolean;
    onLogin: () => void;
    onLogout: () => void;
}

export const AuthContext = createContext<AuthContextValue>({
    isLogged: false,
    onLogin: () => {},
    onLogout: () => {},
})



//funcion custom hook
export function useAuth() {
    const authValue = useContext(AuthContext);
    return authValue;

}
