import { client } from "../../api/client";

import type { Product } from "./types";


const productsUrl = "/v1/adverts";

export const getLatesProducts = async () => {

    const response = await client.get<Product[]>(productsUrl);
    return response.data;
}



// export const createProduct = async (product: productContent) => {
//     const response = await client.post<Product>(productsUrl, product);
//     return response.data;
// }