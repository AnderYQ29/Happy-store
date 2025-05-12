import { Link } from 'react-router';
import logo from '/src/assets/logoHappy.png'

const Header = () => {
    return (
        <header>
                <nav className="navbar navbar-expand-lg navbar-dark" style={{background: "#E53935"}}>
                <div className="container-fluid">
                    <Link className="navbar-brand text-white" to="/">
                    <img src={logo} width="80" height="80" alt="logo" />
                    </Link>
                    <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav mx-auto">
                        <Link className="nav-link active fw-bold mx-1 text-dark link-Home" to="/">Home</Link>
                        <Link className="nav-link text-dark fw-bold mx-1 link-Home" to="/producto">Productos</Link>
                        <Link className="nav-link text-dark fw-bold mx-1 link-Home" to="/about">Nosotros</Link>
                        <Link className="nav-link text-dark fw-bold mx-1 link-Home" to="/contact">Contáctanos</Link>
                    </div>
                    </div>
                </div>
                </nav>
            </header>
    );
}

export default Header;