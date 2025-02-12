import { useState } from "react";
import Button from "../../components/Button";
import { login } from "./service";
import { ClipLoader } from "react-spinners";

interface Props {
    onLogin: () => void;
}

function LoginPage({onLogin}: Props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [IsLoading, setIsLoading] = useState(false);

    const handerSubmit = async (event:React.
        FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        try {
            setIsLoading(true);
            const response = await login({
                email,
                password,
            });
            console.log(response); 
            onLogin();  
        } catch (error) {
            console.error(error);
        }finally{
            setIsLoading(false);
        }
    }
    const handerEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    const handerPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const isDisabled = !email || !password;
    return(
        <div>
            <h1>Login Nodepop</h1>
            <form onSubmit={handerSubmit}   
            >
                <label className="block">
                    Email:
                    <input 
                    type="text" 
                    name="email" 
                    value={email}
                    onChange={handerEmailChange}/>
                </label>
                <label className="block">
                    Password:
                    <input 
                    type="password" 
                    name="password"
                    value={password} 
                    onChange={handerPasswordChange}/>
                </label>
                <Button type="submit" 
                $variant="primary" 
                disabled={isDisabled}
                >
                    {IsLoading ? <ClipLoader color="white" size={20} /> : "Login"}
                    </Button>
            </form>
        </div>
    )
}
export default LoginPage;