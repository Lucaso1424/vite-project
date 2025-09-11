import { useEffect, useState } from "react";
import type { Product } from "../../models/Product";
import { deleteProduct, getProducts } from "../../services/productService";
import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

export function Products() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const goToMainPage = () => {
        navigate('/');
    }

    // SE USA EL USESTATE PARA GUARDAR LOS PRODUCTOS, NECESITA UN TIPO, SE USA ANY[] PARA QUE SEA UN ARRAY DE CUALQUIER TIPO Y UN SETTER PARA ACTUALIZARLO
    const getProductsFromDB = async () => {
        try {
            setLoading(true);
            const data = await getProducts();
            setProducts(data);
            console.log(products)
        } catch (error) {
            setLoading(false);
            console.error(error);
        }
        finally {
            setLoading(false);
        }
    }

    const deleteProductById = async (id: number) => {
        if (id <= 0) {
            alert('Invalid product id');
            return;
        }
        try {
            await deleteProduct(id);
            setLoading(true); 
        }
        catch (error) {
            setLoading(false);
            console.error(error);
        }
        finally {
            await getProductsFromDB();
            setLoading(false);
        }
    }

    
    useEffect(() => {
        getProductsFromDB();
    }, []);

    return <div>
        <h1>Products Page</h1>
        <Button text="Go to main page" action={goToMainPage}></Button>
        <Button text="Get Products" action={getProductsFromDB}></Button>
        {loading ? <p>Loading...</p> : ''}
        {products.length === 0 && !loading && <p>No products</p>}
        {products.map((product, index) => 
            <div key={index}>
                {product.name} - {product.price}
            </div>
        )}
    </div>
    
}