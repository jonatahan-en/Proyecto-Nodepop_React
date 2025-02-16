import React, { useState } from "react";
import Page from "../../components/layout/Page";
import Button from "../../components/shared/Button";
import { createProduct } from "./service";
import "./NewProductPage.css";
import { isApiClientError } from "../../api/client";
import { useNavigate } from "react-router-dom";

const availableTags = ["lifestyle", "mobile", "motor", "work"];

function NewProductPage() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [photo, setPhoto] = useState<File | null>(null);
    const [sale, setSale] = useState("buy");
    const [tags, setTags] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!name || !price || !tags.length ) {
            setError("All fields are required.");
            return;
        }
        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        if (photo) {
            formData.append("photo", photo);
        }
        formData.append("sale", sale === "buy" ? "true" : "false");
        formData.append("tags", tags.join(","));

        try {
            const result = await createProduct(formData);
            console.log(result);
            navigate("/products");
        } catch (error) {
            if (isApiClientError(error)) {
                if (error.code === "NOT_FOUND") {
                    navigate("/404");
                } else {
                    setError(error.message);
                }
            }
        }
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(event.target.value);
    };

    const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setPhoto(event.target.files[0]);
        }
    };

    const handleSaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSale(event.target.value);
    };

    const handleTagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setTags((prevTags) =>
            prevTags.includes(value)
                ? prevTags.filter((tag) => tag !== value)
                : [...prevTags, value]
        );
    };

    return (
        <Page title="New Product">
            <div className="new-product-container">
                <h1>New Product</h1>
                {error && <p className="error-message">{error}</p>}
                <form className="new-product-form" onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </label>
                    <label>
                        Price:
                        <input
                            type="number"
                            name="price"
                            value={price}
                            onChange={handlePriceChange}
                        />
                    </label>
                    <label>
                        Photo:
                        <input
                            type="file"
                            name="photo"
                            onChange={handlePhotoChange}
                        />
                    </label>
                    <label>
                        Sale:
                        <select name="sale" value={sale} onChange={handleSaleChange}>
                            <option value="buy">Buy</option>
                            <option value="sell">Sell</option>
                        </select>
                    </label>
                    <fieldset>
                        <legend>Tags:</legend>
                        {availableTags.map((tag) => (
                            <label key={tag}>
                                <input
                                    type="checkbox"
                                    name="tags"
                                    value={tag}
                                    checked={tags.includes(tag)}
                                    onChange={handleTagChange}
                                />
                                {tag}
                            </label>
                        ))}
                    </fieldset>
                    <Button
                        type="submit"
                        $variant="primary"
                    >
                        Let's go!
                    </Button>
                </form>
            </div>
        </Page>
    );
}

export default NewProductPage;