import {  useEffect, useState } from "react";
import Button from "../../components/Button";
import { getLatesProducts } from "./service";
import { Product } from "./types";


// Este componente muestra una lista de productos
function ProductsPage() {
    const[products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        getLatesProducts().then((response) => {
            setProducts(response);
        });
    }, []);

    return (
        <div>
            <h1>Products page</h1> 
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <strong>{product.name}</strong>
                        <h3>Price:</h3>
                        <p>{product.price} €</p>
                        <img 
                        src={product.photo} 
                        style={{ width: "100px" , height: "100px" }} 
                        alt={product.name} />
                        <h3>Sale type:</h3>
                        <ul>
                            {product.sale ? (
                                <li>For sale</li>
                            ) : (
                                <li>For purchase</li>
                            )
                            }
                        </ul>
                        <h3>Tags:</h3>
                        <ul>
                            {product.tags.map((tag, index) => (
                                <li key={`${product.id}-tag-${index}`}>{tag}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
            <Button onClick={() =>{
                console.log("Button clicked!");
            }}
            $variant="secondary"
            >
                Click me!
                </Button>
            <Button $variant="primary">Primary</Button>
        </div>
    )
}

export default ProductsPage;
