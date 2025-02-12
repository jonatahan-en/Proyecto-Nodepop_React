import { logout } from "../../pages/auth/service";
import Button from "../Button";


interface Props {
    onLogout: () => void;
    isLogged: boolean;
}

export default function Header({onLogout, isLogged}: Props) {
    const handleLogoutClick = async () => {
        await logout();
        onLogout();
    };


    return(
        <header>
            <div></div>
            <div></div>
            <nav> 
                {isLogged ?(
                <Button onClick={handleLogoutClick}
                $variant="secondary"
                >
                    Logout
                </Button>
            ) : (
            <Button $variant="primary">Login</Button>
            )}
            </nav>
        </header>
    )
}