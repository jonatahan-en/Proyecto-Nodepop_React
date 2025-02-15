import Layout from "../../components/layout/Layout";
import Button from "../../components/shared/Button";
import "./NewProductPage.css"; 

function NewProductPage() {
    return( 
        <Layout title="New Product">
            <div className="new-product-container">
                <h1>New Product</h1>
                <form className="new-product-form">
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                        />
                    </label>
                    <label>
                        Price:
                        <input
                            type="number"
                            name="price"
                        />
                    </label>
                    <label>
                        Photo:
                        <input
                            type="file"
                            name="photo"
                        />
                    </label>
                    <label>
                        Sale:
                        <input
                            type="checkbox"
                            name="sale"
                        />
                    </label>
                    <label>
                        Tags:
                        <input
                            type="text"
                            name="tags"
                        />
                    </label>
                    <Button
                        type="submit"
                        $variant="primary"
                    >
                        Let's go!
                    </Button>
                </form>
            </div>
        </Layout>
    );
}

export default NewProductPage;