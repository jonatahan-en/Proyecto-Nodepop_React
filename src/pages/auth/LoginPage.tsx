import { useState } from "react";
import Button from "../../components/shared/Button";
import { login } from "./service";
import { ClipLoader } from "react-spinners";
import { useAuth } from "./context";
import "./LoginPage.css"; // Importa el archivo CSS
import { useLocation, useNavigate } from "react-router-dom";

function LoginPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { onLogin } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    console.log(location);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            setIsLoading(true);
            const response = await login({
                email,
                password, 
            });
            console.log(response);
            onLogin();

            const to = location.state ?.from ?? "/";
            navigate(to, { replace: true });
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const isDisabled = !email || !password;

    return (
        <div className="login-container">
            <h1>Log in to Nodepop</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </label>
                <Button
                    type="submit"
                    $variant="primary"
                    disabled={isDisabled}
                >
                    {isLoading ? <ClipLoader color="white" size={20} /> : "Login"}
                </Button>
            </form>
        </div>
    );
}

export default LoginPage;