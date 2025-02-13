import { useAuth } from "../../pages/auth/context";
import { logout } from "../../pages/auth/service";
import Button from "../Button";


export default function Header() {
    const {isLogged, onLogout} = useAuth();
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