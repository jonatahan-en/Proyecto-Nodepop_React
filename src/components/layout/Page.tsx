import { ReactNode } from "react";

interface Props {
    title: string;
    children: ReactNode;
}

export default function Page({title, children}: Props) {
    return(
        <div>
            <h2>{title}</h2>
            {children}
        </div>
    )
}
