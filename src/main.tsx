import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import storage from "./utils/storage.ts";
import { setAuthorizationHeader } from "./api/client.ts";

const acccessToken = storage.get("auth");
if (acccessToken) {
  setAuthorizationHeader(acccessToken);
}


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App defaultIsLogged={!!acccessToken} />
  </StrictMode>,
);
