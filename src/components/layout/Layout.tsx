import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./footer";

interface LayoutProps {
    title: string;
    children: ReactNode;
    onLogout: () => void;
    isLogged: boolean;
}

export default function Layout({title, children, ...rest}: LayoutProps) {
    return(
        <div>
            <Header {...rest}/>
            <main>
                <h2>{title}</h2>
                {children}
            </main>
            <Footer/>
        </div>
    )
}
