import { useEffect, useState } from "react";
import { getLatesProducts } from "./service";
import { Product } from "./types";
import './ProductsPage.css'; // Importa el archivo CSS
import Button from "../../components/shared/Button";
import { Link } from "react-router-dom";
import Page from "../../components/layout/Page";

const EmptyList = () => (
    <div className="products-empty">
        <p>No products found</p>
        <Button $variant="primary">Create new product</Button>
    </div>
);

// Este componente muestra una lista de productos
function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        getLatesProducts().then((response) => {
            setProducts(response);
        });
    }, []);

    return (
        <Page title="Products">
            <div className="products-container">
                <h1>Products page</h1>
                {products.length ? (
                <ul className="products-list"> 
                    {products.map((product) => (
                    <Link to={`/products/${product.id}`}>
                        <li key={product.id} className="product-item">
                            <strong>{product.name}</strong>
                            <h3>Price:</h3>
                            <p>{product.price} €</p>
                            <img
                                src={product.photo}
                                alt={product.name}
                            />
                            <h3>Sale type:</h3>
                            <ul>
                                {product.sale ? (
                                    <li>For sale</li>
                                ) : (
                                    <li>For purchase</li>
                                )}
                            </ul>
                            <h3>Tags:</h3>
                            <ul>
                                {product.tags.map((tag, index) => (
                                    <li key={`${product.id}-tag-${index}`}>{tag}</li>
                                ))}
                            </ul>
                        </li>
                    </Link>
                    ))}
                </ul>
            ) : (   
                <EmptyList />
            )}
            </div>
        </Page>
    );
}

export default ProductsPage;
