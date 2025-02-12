import { client, setAuthorizationHeader } from "../../api/client";
import type {Credentials, loginResponse } from "./types";

export const login = async (Credentials: Credentials) => {
    const response = await client.post<loginResponse>("/auth/login", Credentials);
    const{accessToken} = response.data;
    setAuthorizationHeader(accessToken);
    
    return response.data;
};