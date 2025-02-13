import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import storage from "./utils/storage.ts";
import { setAuthorizationHeader } from "./api/client.ts";
import { AuthProvider } from "./pages/auth/context.tsx";

const acccessToken = storage.get("auth");
if (acccessToken) {
  setAuthorizationHeader(acccessToken);
}


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider defaultIsLogged={!!acccessToken}>
      <App />
    </AuthProvider>
  </StrictMode>,
);
