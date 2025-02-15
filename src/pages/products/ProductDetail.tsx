import { useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout"

function ProductDetail () {
    const params = useParams();
    
    return (
        <Layout title="Product detail">{`Product detail 
        ${params.productId} goes here...`}
    </Layout>
    );  
    
} 
export default ProductDetail;  