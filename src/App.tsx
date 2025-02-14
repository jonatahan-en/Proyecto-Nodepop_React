
import ProductsPage from "./pages/products/ProductsPage";
import { useAuth } from "./pages/auth/context";
//import NewProductPage from "./pages/products/NewProductPage";
import LoginPage from "./pages/auth/LoginPage";



function App() {
  const {isLogged}= useAuth();
  
  return isLogged ? (
  < ProductsPage />
  ):( 
  < LoginPage/>
);
}

export default App;
