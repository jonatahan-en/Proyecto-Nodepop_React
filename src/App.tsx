//import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import ProductsPage from "./pages/products/ProductsPage";
import NewProductPage from "./pages/products/NewProductPage";
import ProductDetail from "./pages/products/ProductDetail";
import RequireAuth from "./pages/auth/requireAuth";
import Layout from "./components/layout/Layout";

function App() {
    const userId = "user-id"; // Obtener la información del usuario autenticado de alguna manera

    return (
        <Routes>
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/products" element={
                <Layout>
                    <Outlet />
                </Layout>
            }>
                <Route index element={<ProductsPage />} />
                <Route path=":productId" element={<ProductDetail userId={userId} />} />
                <Route path="new" element={
                    <RequireAuth>
                        <NewProductPage />
                    </RequireAuth>
                } />
            </Route>
            <Route path="/" element={<Navigate to="/products" />} />
            <Route path="/404" element={<div>404 | NOT FOUND</div>} />
            <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
    );
}

export default App;