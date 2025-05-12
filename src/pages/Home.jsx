import { Link } from "react-router";
import shop from '/src/assets/shopping.png'

const Home = () => {
    return (
            <div className="body-Home">
                <section className="heroHome">
                    <div className="contHome g-layout g-layout--center md:g-layout--1fr-1fr">
                        <div className="d-flexHome f-direction-column-Home a-items-start-Home g-2-Home">
                            <h1 className="hero-title-Home">
                                No es solo una tienda
                                <br />
                                Es <span className="c-primary-Home">HAPPY ST😄RE</span>
                            </h1>
                            <p className="hero-paragraph-Home">
                                Descubre la alegría de comprar con nuestra cuidada selección de productos. <br />
                                Desde lo esencial del día a día, hasta sorpresas encantadoras. Happy Store te ofrece
                                calidad, buenos precios y una experiencia que te hará sonreír. <br />
                                No es solo una compra, es una experiencia
                            </p>
                            <Link to="/producto">
                            <button className="link-Home link-Home--active interactive-Home interactive-Home--lg">Ver productos</button>
                            </Link>
                        </div>
                        <img src={shop}
                            alt="shopping" width="450" height="500" />
            
                    </div>
                </section>
            </div>
    );
}

export default Home;