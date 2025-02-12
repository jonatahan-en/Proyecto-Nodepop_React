import { client } from "../../api/client";
import type { Product, productContent } from "./types";

const productsUrl = "/v1/adverts";

export const getLatesProducts = async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhNjdkYzk1My04NGRjLTRjMGEtOGVmMi05ODVhZGZiZjc4ZDkiLCJpYXQiOjE3MzkyNjc3MzEsImV4cCI6MTc3MDgyNTMzMX0.YGFZz2VaDHymgz4DiWq-LEZ5DQ8O_7PfZrOqvn4kkTY";    
    const response = await client.get<Product[]>(productsUrl,{ 
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    return response.data;
}


export const createProduct = async (product: productContent) => {
    const response = await client.post<Product>(productsUrl, product);
    return response.data;
}