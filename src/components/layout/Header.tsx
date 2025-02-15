import { Link } from "react-router-dom";
import AuthButton from "../../pages/auth/AuthButton";
import "./Header.css"; 

export default function Header() {
    return (
        <header >
            <h1>Nodepop</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products/:productId">Products Detail</Link>
                <Link to="/products/new">New Products</Link>
                <AuthButton  />
            </nav>
        </header>
    );
}