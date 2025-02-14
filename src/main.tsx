import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import storage from "./utils/storage.ts";
import { setAuthorizationHeader } from "./api/client.ts";
import { AuthProvider } from "./pages/auth/AuthProvider.tsx";
import { BrowserRouter } from "react-router-dom";

const acccessToken = storage.get("auth");
if (acccessToken) {
  setAuthorizationHeader(acccessToken);
}


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider defaultIsLogged={!!acccessToken}>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
