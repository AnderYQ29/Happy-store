import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Producto = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        const getProducts = async () => {
        try {
            setError(false);
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
            setError(true);
        } finally {
            setLoading(false);
        }
        };
    
        getProducts();
    }, []);

    return (
        <>
        <section className="py-4">
        <div className='container d-flex flex-column align-items-center gap-2'>
            <h1>Happy Store</h1>
            { error && (
            <div className="alert alert-danger" role='alert'>
                Error fetching products.
                </div>
            )}
            {loading ? (
            <div className="d-flex juustify-content-center">
                <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            ): (
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {products.map((product) =>(
                <ProductCard key={product.id} product={product} />
                ))}
            </div>
            )}
        </div>
        </section>
        </>
        
    );
}
export default Producto