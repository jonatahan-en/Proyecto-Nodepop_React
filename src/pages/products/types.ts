export interface Product {
    id: number;
    name: string;
    price: number;
    photo: string;
    sale: boolean;
    tags: string[];
    ownerId: string; // Añadir el campo ownerId
}

export interface productContent {
    name: string;
    price: number;
    photo: string;
    sale: boolean;
    tags: string[];
}