import { client } from "../../api/client";
import { Product } from "./types";

const productsUrl = "/v1/adverts";

export const getLatesProducts = async () => {
    const token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhNjdkYzk1My04NGRjLTRjMGEtOGVmMi05ODVhZGZiZjc4ZDkiLCJpYXQiOjE3MzkyNjc3MzEsImV4cCI6MTc3MDgyNTMzMX0.YGFZz2VaDHymgz4DiWq-LEZ5DQ8O_7PfZrOqvn4kkTY";    
    const products: Product[] = await client.get(productsUrl,{ 
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    return products;
}