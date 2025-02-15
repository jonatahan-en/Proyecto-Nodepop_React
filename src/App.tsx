
//import ProductsPage from "./pages/products/ProductsPage";
//import { useAuth } from "./pages/auth/context";
import LoginPage from "./pages/auth/LoginPage";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/products/ProductsPage";
import NewProductPage from "./pages/products/NewProductPage";
import ProductDetail from "./pages/products/ProductDetail";
import RequireAuth from "./pages/auth/requireAuth";



    function App() {
return ( 
  <Routes>
    <Route path="/login" element={<LoginPage/>} />

    <Route path="/products" element={ <Outlet/>} >
      <Route index element={<ProductsPage />} />
      <Route path=":productId" element={<ProductDetail />} />/
      <Route path="new" element={
      <RequireAuth>
        <NewProductPage/>
        </RequireAuth>
      } 
      />
    </Route>

    <Route path="/" element={<Navigate to="/products"/>} />

    <Route path="/404" element={ <div>404 | NOT FOUND </div>} />
    <Route path="*" element={<Navigate to="/404" />} />
  </Routes>
  )
}
  

export default App;
