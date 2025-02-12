import { useState } from "react";
import LoginPage from "./pages/auth/LoginPage";
import ProductsPage from "./pages/products/ProductsPage";

function App() {
  const[isLogged, setIsLogged] = useState(false);
  const handerLogin = () => {
    setIsLogged(true);
  };
  return isLogged ? < ProductsPage /> : < LoginPage onLogin={handerLogin}/>;
}

export default App;
