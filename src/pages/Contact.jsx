import { useState } from "react";
import contacto from '/src/assets/contact.webp';
import { ToastContainer, Toast } from "react-bootstrap";


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        acceptTerms: false,
    });

    const [showToast, setShowToast] = useState(false);
    //nuevo estado para guardar el nombre antes que formatee y muestre el toast
    const [userName, setUsername] = useState("");

    const handleInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //validaciones minimas
        if (formData.name && formData.email && formData.message && formData.acceptTerms) {
            setUsername(formData.name);
            setShowToast(true);
            //resetea el formulario
            setFormData({ name: '', email: '', phone: '', message: '', acceptTerms: false });
        }
    };

    return (
        <section className="py-5 bg-light">
            <div className="container d-flex justify-content-center">
                <div className="card shadow-lg border-0 rounded-4 p-4 w-100">
                    <div className="text-center mb-4">
                        <img
                        className="mb-3"
                        src={contacto}
                        alt="Contacto-img"
                        width="120"
                        height="120"
                        />
                        <h2 className="fw-bold">Contáctanos</h2>
                        <p className="text-muted">¿Tienes consultas o dudas? Escríbenos y responderemos pronto</p>
                    </div>

                    <form onSubmit={handleSubmit} style={{ maxWidth: '512px' }} className="mx-auto text-center">
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                id="floatingInputName"
                                name="name"
                                value={formData.name}
                                onInput={handleInput}
                                required
                            />
                            <label htmlFor="floatingInputName">Nombre</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="name@example.com"
                                id="floatingInputEmail"
                                name="email"
                                value={formData.email}
                                onInput={handleInput}
                                required />
                            <label htmlFor="floatingInputEmail">Correo electrónico</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="phone"
                                className="form-control"
                                placeholder="999888777"
                                id="floatingInputPhone"
                                name="phone"
                                value={formData.phone}
                                onInput={handleInput}
                                required />
                            <label htmlFor="floatingInputPhone">Teléfono</label>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea
                                className="form-control"
                                placeholder="Leave a comment here"
                                id="floatingTextarea"
                                name="message"
                                value={formData.message}
                                onInput={handleInput}
                                style={{ height: '120px' }}
                            ></textarea>
                            <label htmlFor="floatingTextarea">Mensaje</label>
                        </div>
                        <div className="form-check text-start mb-3">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="checkDefault"
                                name="acceptTerms"
                                checked={formData.acceptTerms}
                                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.checked })}
                                required />
                            <label className="form-check-label" htmlFor="checkDefault">
                                Acepto los términos y condiciones
                            </label>
                        </div>
                        <button className="btn btn-danger w-100 py-2" type="submit">Enviar mensaje</button>
                    </form>
                        <p className="mt-4 mb-0 text-center text-muted">© 2025 Happy Store</p>
                    {/*<pre>{JSON.stringify(formData, null, 2)}</pre>*/}
                </div>
            </div>

            {/*Toat confir. flotante*/}
            <ToastContainer position="bottom-center" className="p-3">
                <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide bg="danger">
                    <Toast.Header>
                        <strong className="me-auto">Formulario enviado</strong>
                    </Toast.Header>
                    <Toast.Body className="text-white">
                        ¡Gracias, <strong>{userName}</strong>! Hemos recibido tu mensje.
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </section>
    );
}
export default Contact;