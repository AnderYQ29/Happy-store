import { useNavigate } from "react-router";
import useCartStore from "../store/cartStore";

const CartPage = () => {
    const { cartItems, removeFromCart, clearCart } = useCartStore();
    const navigate = useNavigate(); //para redireccionar

    const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <div className="container py-5">
            <h2 className="mb-4">Carrito de compras</h2>

            {cartItems.length === 0 ? (
                <p className="text-muted">Tu carrito está vacio.</p>
            ) : (
                <>
                    <ul className="list-group mb-4">
                        {cartItems.map((item) => (
                            <li key={item.id}
                            className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <h5 className="mb-1">{item.title}</h5>
                                    <small>Cantidad: {item.quantity}</small>
                                </div>
                                <div>
                                    <strong>${(item.price *item.quantity).toFixed(2)}</strong>
                                    <button
                                        className="btn btn-sm btn-danger ms-3"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Quitar
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="d-flex justify-content-between align-items-center">
                        <h4>Total: ${totalPrice.toFixed(2)}</h4>
                        <button className="btn btn-outline-danger" onClick={clearCart}>
                            Vaciar carrito
                        </button>
                    </div>
                    <br />
                    <div className="text-end">
                        <button className="btn btn-danger btn-lg" onClick={() => navigate("/checkout")}>
                            Finalizar compra
                        </button>
                    </div>
                </>
            )
        }
        </div>
    );
}

export default CartPage;