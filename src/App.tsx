import { useState } from "react";
import LoginPage from "./pages/auth/LoginPage";
import ProductsPage from "./pages/products/ProductsPage";


interface Props {
  defaultIsLogged : boolean;
}

function App({defaultIsLogged}: Props) {
  const[isLogged, setIsLogged] = useState(defaultIsLogged);
  const handerLogin = () => {
    setIsLogged(true);
  };

  const handerLogout = () => {
    setIsLogged(false);
  }
  return isLogged ? (
  < ProductsPage onLogout={handerLogout} />
  ):( 
  < LoginPage onLogin={handerLogin}/>
);
}

export default App;
