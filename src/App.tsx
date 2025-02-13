import LoginPage from "./pages/auth/LoginPage";
import ProductsPage from "./pages/products/ProductsPage";
import { useAuth } from "./pages/auth/context";



function App() {
  const {isLogged}= useAuth();
  
  return isLogged ? (
  < ProductsPage />
  ):( 
  < LoginPage/>
);
}

export default App;
