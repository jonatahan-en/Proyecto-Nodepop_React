import axios from "axios";


export const client = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export const setAuthorizationHeader = (accessToken: string) => {
    client.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
}
