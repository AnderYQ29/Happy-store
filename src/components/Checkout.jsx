import { useNavigate } from "react-router";
import useCartStore from "../store/cartStore";
import { useState } from "react";

const Checkout = () => {
    const { cartItems, clearCart } = useCartStore();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        address: "",
        payment: "credit",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.address || !form.email) {
            alert("Por favor, complete todos los campos.")
            return;
        }

        alert("¡Compra realizada!");
        clearCart();
        navigate("/")
    };

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

    return (
        <section className="container py-5">
            <h2 className="mb-4">Checkout</h2>

            <div className="row g-4">
                <div className="col-md-6">
                    <h4>Resumen de compra:</h4>
                    <ul className="list-group">
                        {cartItems.map((item) => (
                            <li key={item.id} className="list-group-item d-flex justify-content-between">
                                <span>{item.title}</span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </li>
                        ))}
                        <li className="list-group-item d-flex justify-content-between fw-bold">
                            <span>Total:</span>
                            <span>${total}</span>
                        </li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h4>Datos del cliente:</h4>
                    <form onSubmit={handleSubmit} className="vstack gap-3">
                        <input
                            type="text"
                            name="name"
                            placeholder="Nombre completo"
                            className="form-control"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Correo Electrónico"
                            className="form-control"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="address"
                            placeholder="Dirección de entrega"
                            className="form-control"
                            value={form.address}
                            onChange={handleChange}
                            required
                        />
                        <select
                            name="payment"
                            className="form-select"
                            value={form.payment}
                            onChange={handleChange}
                        >
                            <option value="credit">Tarjeta de crédito</option>
                            <option value="paypal">PayPal</option>
                            <option value="cash">MasterCard</option>
                            <option value="paypal">Visa</option>
                            <option value="cash">Pago contra entrega</option>
                        </select>
                        <button type="submit" className="btn btn-danger btn-lg">Pagar ahora</button>
                    </form>
                </div>
            </div>
        </section>

    );
}

export default Checkout;