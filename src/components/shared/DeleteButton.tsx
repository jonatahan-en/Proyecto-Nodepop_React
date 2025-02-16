import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../../pages/products/service";
import { isApiClientError } from "../../api/client";

interface DeleteButtonProps {
    productId: string | number;
    ownerId: string;
    userId: string | null;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ productId, ownerId, userId }) => {
    const [isConfirming, setIsConfirming] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            await deleteProduct(productId);
            navigate("/");
        } catch (error) {
            if (isApiClientError(error)) {
                setError(error.message);
            } else {
                setError("An unexpected error occurred.");
            }
        }
    };

    if (userId !== ownerId) {
        return null; // No mostrar el botón si el usuario no es el dueño del anuncio
    }

    return (
        <div>
            {isConfirming ? (
                <div>
                    <p>¿Estás seguro de que quieres borrar el anuncio?</p>
                    <button onClick={handleDelete}>Sí</button>
                    <button onClick={() => setIsConfirming(false)}>No</button>
                </div>
            ) : (
                <button onClick={() => setIsConfirming(true)}>Borrar</button>
            )}
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default DeleteButton;