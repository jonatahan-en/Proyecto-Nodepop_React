import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./footer";

interface LayoutProps {
    title: string;
    children: ReactNode;
}

export default function Layout({title, children}: LayoutProps) {
    return(
        <div>
            <Header/>
            <main>
                <h2>{title}</h2>
                {children}
            </main>
            <Footer/>
        </div>
    )
}
