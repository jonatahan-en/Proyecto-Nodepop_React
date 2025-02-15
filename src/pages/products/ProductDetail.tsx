import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { useEffect, useState } from "react";
import { Product } from "./types";
import { getProduct } from "./service";
import "./ProductDetail.css"; // Importa el archivo CSS

function ProductDetail() {
    const params = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        if (params.productId) {
            getProduct(params.productId)
                .then((product) => setProduct(product))
                // .catch((error) => {
                //     if (isApiClientError(error)) {
                //         if (error.code === "NOT_FOUND") {
                //             navigate("/404");
                //         }
                //     } 
                // });
        }
    }, [params.productId, navigate]);

    return (
        <Layout title="Product detail">
            {product ? (
                <div className="product-detail-container"> {/* Aplicar la clase CSS */}
                    <h2>{product.name}</h2>
                    <p>Price: {product.price}</p>
                    <p>Sale: {product.sale ? "Yes" : "No"}</p>
                    <p>Tags: {product.tags.join(", ")}</p>
                    <img src={product.photo} alt={product.name} /> {/* Mostrar la imagen del producto */}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </Layout>
    );
}

export default ProductDetail;