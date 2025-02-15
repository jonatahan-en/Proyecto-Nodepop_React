import axios, { isAxiosError } from "axios";
import { ApiClientError } from "./error";

export const client = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

// Interceptor to handle API client errors para que el cliente no reciba errores de axios
client.interceptors.response.use(undefined, (error) => {

    const clientError = new ApiClientError("Api Client Error");

    if (error instanceof Error) {
        clientError.message = error.message;

        if (isAxiosError<{ message: string }>(error)) {
            clientError.message =
                error.response?.data.message ??
                error.response?.statusText ??
                clientError.message;
            const errorCode = error.code;
            const errorStatus = error.response?.status ?? error.status;

            if (errorCode === "ERR_NETWORK") {
                clientError.code = "NETWORK_ERROR";
            }
            if (typeof errorStatus === "number") {
                if (errorStatus === 401) {
                clientError.code = "UNAUTHORIZED";
                } else if (errorStatus === 404) {
                clientError.code = "NOT_FOUND";
                } else if (errorStatus >= 500) {
                clientError.code = "SERVER_ERROR";
                }
            }
        }
    }
    return Promise.reject(clientError);
});

export function isApiClientError(error: unknown): error is ApiClientError {
    return error instanceof ApiClientError;
}

export const setAuthorizationHeader = (accessToken: string) => {
    client.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
};

export const removeAuthorizationHeader = () => {
    delete client.defaults.headers["Authorization"];
};
