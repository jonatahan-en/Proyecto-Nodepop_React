import { client, removeAuthorizationHeader, setAuthorizationHeader } from "../../api/client";
import storage from "../../utils/storage";
import type {Credentials, loginResponse } from "./types";


// Es
export const login = async (Credentials: Credentials) => {
    const response = await client.post<loginResponse>("/auth/login", Credentials);
    const{accessToken} = response.data;
    storage.set("auth", accessToken);//Guardamos el token en el local storage
    setAuthorizationHeader(accessToken);//Añadimos el token a las cabeceras de las peticiones
    return response.data;
};
export const logout = async () => {
    storage.remove("auth");
    removeAuthorizationHeader();
};