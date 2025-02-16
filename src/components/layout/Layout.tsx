import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./footer";
import "./Layout.css"; // Importa el archivo CSS

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="layout-container"> 
            <Header  /> 
            <main className="layout-main"> 
                {children}
            </main>
            <Footer /> 
        </div>
    );
}
