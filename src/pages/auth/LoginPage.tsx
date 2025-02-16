import { useEffect, useState } from "react";
import Button from "../../components/shared/Button";
import { login } from "./service";
import { ClipLoader } from "react-spinners";
import { useAuth } from "./context";
import "./LoginPage.css"; 
import { useLocation, useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

function LoginPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ 
        email: "", 
        password: "" ,
    });
    const { onLogin } = useAuth();
    const [error, setError] = useState<{message:string} | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    useEffect(() => {
        const rememberMe = localStorage.getItem("rememberMe") === "true";
        const email = rememberMe ? localStorage.getItem("email") : "";
        setRememberMe(rememberMe);
        setCredentials((credentials) => ({
            ...credentials,
            email: email || "",
        }));
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            setIsLoading(true);
            const response = await login({
                email: credentials.email,
                password: credentials.password 
            });
            console.log(response);
            onLogin();

            if (rememberMe) {
                localStorage.setItem("rememberMe", "true");
                localStorage.setItem("email", credentials.email);
            } else {
                localStorage.removeItem("rememberMe");
                localStorage.removeItem("email");
            }

            const to = location.state?.from ?? "/";
            navigate(to, { replace: true });
        } catch (error) {
            console.log("Error", error);
            if (error instanceof AxiosError) {
                setError({ message: error.response?.data?.message ?? "" });
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials((credentials) => ({
            ...credentials,
            [event.target.name]: event.target.value, 
        }));
    };

    const handleRememberMeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRememberMe(event.target.checked);
    };

    const isDisabled = !credentials.email || !credentials.password || isLoading;

    return (
        <div className="login-container">
            <h1>Log in to Nodepop</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        type="text"
                        name="email"
                        value={credentials.email}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="rememberMe"
                        checked={rememberMe}
                        onChange={handleRememberMeChange}
                    />
                    Remember me
                </label>
                <Button
                    type="submit"
                    $variant="primary"
                    disabled={isDisabled}
                >
                    {isLoading ? <ClipLoader color="white" size={20} /> : "Login"}
                </Button>
                {error && (
                    <div className="error-message" onClick={() => setError(null)}>
                        {error.message}
                    </div>
                )}
            </form>
        </div>
    );
}

export default LoginPage;