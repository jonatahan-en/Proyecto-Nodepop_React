const products = [
    {
        id: 1,
        name: "Bicicleta",
        price: 200,
        photo: "bici.jpg",
        saleType: ["forSale", "forPurchase"],
        tags: ["lifestyle", "motor"],
    },
    {
        id: 2,
        name: "iPhone X",
        price: 350,
        photo: "iphone.png",
        saleType: ["forSale", "forPurchase"],
        tags: ["lifestyle", "mobile"],
    },
    {
        id: 3,
        name: "Portátil",
        price: 500,
        photo: "portatil.jpg",
        saleType: ["forSale", "forPurchase"],
        tags: ["lifestyle", "work"],
    },
    {
        id: 4,
        name: "Cámara de fotos",
        price: 300,
        photo: "camera.jpg",
        saleType: ["forSale", "forPurchase"],
        tags: ["lifestyle", "mobile"],
    },
];
// Este componente muestra una lista de productos
function ProductsPage() {
    return (
        <div>
            <h1>Products page</h1> 
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.price} €</p>
                        <img src={product.photo} alt={product.name} />
                        <h3>Sale type:</h3>
                        <ul>
                            {product.saleType.map((type, index) => (
                                <li key={`${product.id}-saleType-${index}`}>{type}</li>
                            ))}
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
        </div>
    )
}

export default ProductsPage;
