import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Product } from "./types";
import { getProduct } from "./service";
import { isApiClientError } from "../../api/client";
import "./ProductDetail.css"; 
import Page from "../../components/layout/Page";
import DeleteButton from "../../components/shared/DeleteButton"; 

interface ProductDetailProps {
    userId: string | null; // Información del usuario autenticado
}

function ProductDetail({ userId }: ProductDetailProps) {
    const params = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        if (params.productId) {
            getProduct(params.productId)
                .then((product) => setProduct(product))
                .catch((error) => {
                    if (isApiClientError(error)) {
                        if (error.code === "NOT_FOUND") {
                            navigate("/404");
                        }
                    } 
                });
        }
    }, [params.productId, navigate]);

    return (
        <Page title="Product detail">
            {product ? (
                <div className="product-detail-container"> 
                    <h2>{product.name}</h2>
                    <p>Price: {product.price}</p>
                    <p>Sale: {product.sale ? "Yes" : "No"}</p>
                    <p>Tags: {product.tags.join(", ")}</p>
                    <img src={product.photo} alt={product.name} /> 
                    <DeleteButton productId={product.id} ownerId={product.ownerId} userId={userId} />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </Page>
    );
}

export default ProductDetail;