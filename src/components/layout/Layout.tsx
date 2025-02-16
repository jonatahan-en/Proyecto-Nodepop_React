import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./footer";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children}: LayoutProps) {
    return(
        <div>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}
