import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useCartStore from "../store/cartStore";


const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate(); //para navegar
    const addToCart = useCartStore((state) => state.addToCart); //para obtener la funcion que hicimos

    const [products, setProducts] = useState({
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
        rating: "",
    });
    const [loading, setLoading] = useState(true);

    const { title, price, description, category, image } = products;

    useEffect(() => {
        const getProducts = async (id) => {
            try {
                setLoading(true);
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        getProducts(id);
    }, [id]);

    const handleBuyNow = () => {
        addToCart(products); //carrito
        navigate("/cart");
    };

    return (
        <section className="py-5 bg-light">
            <div className="container">
                <button className="btn btn-danger mb-4" onClick={() => navigate("/producto")}>
                    ← Volver a productos
                </button>
                {loading ? (
                    <div className="d-flex juustify-content-center align-items-center" style={{ minHeight: "50vh" }}>
                        <div className="spinner-grow text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="row g-5 align-items-center">
                            <div className="col-md-6 text-center">
                                <img
                                    src={image}
                                    className="img-fluid rounded-4 shadow-lg"
                                    alt={title}
                                    style={{ maxHeight: "400px", objectFit: "contain" }}
                                    loading="lazy"
                                />
                            </div>

                            <div className="col-md-6">
                                <h1 className="fw-bold">{title}</h1>
                                <p className="text-muted mb-1">{category}.</p>
                                <h2 className="text-success fw-semibold mb-3">${price}</h2>
                                <p className="lead">{description}.</p>
                                <div className="mt-4 d-flex flex-wrap gap-3">
                                    <button type="button"
                                        className="btn btn-danger btn-lg" onClick={handleBuyNow}>Comprar Ahora</button>
                                    <button type="button"
                                        className="btn btn-outline-dark btn-lg" onClick={() => addToCart(products)} >Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}

export default ProductDetail;