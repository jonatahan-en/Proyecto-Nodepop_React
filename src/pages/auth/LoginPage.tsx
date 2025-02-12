import Button from "../../components/Button";
import { login } from "./service";

interface Props {
    onLogin: () => void;
}

function LoginPage({onLogin}: Props) {
    const handerSubmit = async (event:React.
        FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        try {
            const response = await login({
                email: event. currentTarget.email.value,
                password: event.currentTarget.password.value
            });
            console.log(response); 
            onLogin();  
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <div>
            <h1>Login Nodepop</h1>
            <form onSubmit={handerSubmit}   
            >
                <label className="block">
                    Email:
                    <input type="text" name="email"/>
                </label>
                <label className="block">
                    Password:
                    <input type="password" name="password"/>
                </label>
                <Button type="submit" $variant="primary" >Log in</Button>
            </form>
        </div>
    )
}
export default LoginPage;