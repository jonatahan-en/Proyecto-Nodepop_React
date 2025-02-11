import styled from "styled-components";

const accentColor = "blue";

const Button = styled.button<{ $variant: "primary" | "secondary" }>`
    cue: pointer;
    border-radius: 9999px;
    border-style: solid;
    border-width: 1px;
    background-color: ${(props) =>
        props.$variant === "primary" ? accentColor : "white"};
    border-color: ${accentColor}    
    color: ${(props) => (props.$variant === "primary" ? "white" : accentColor)};
    display: inline-flex;
    align-items: center;
    gap: 5px;
    margin: 5px;
    fond: inherit;
    fond-weight: bold;
    min-width: 72px;
    justy-content: center;
    min-height: 36px;
    authine-items: none;
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
    padding: 0 30px;
    pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
    text-decoration: none;
    transition: background-color 0.2s;
    &:hover {
        background-color: ${(props) =>
        props.$variant === "primary" ? "darkblue" : "lightgray"};
    }
    `;
export default Button;