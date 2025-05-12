import logo from '/src/assets/logoHappy.png'
import face from '/src/assets/facebook.svg'
import insta from '/src/assets/instagram.svg'
import github from '/src/assets/github.svg'
import { Link } from 'react-router'

const Footer = () => {
    return (
        <footer className='text-light mt-auto py-3' style={{ background: "#E53935"}}>
                    <div className="container">
                    <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                        <div className="col-md-4 d-flex align-items-center">
                        <Link to="/" className='mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1'>
                                <img src={logo} className="bi" width="80" height="80" aria-hidden="true" />
                        </Link>
                        <span className="mb-3 mb-md-0 text-white">© 2025 Happy Store</span>
                        </div>
                        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3">
                            <a className="text-body-secondary" href="https://www.instagram.com/jhon_anderson29/?hl=es" aria-label="Instagram">
                            <img src={insta} className="bi" width="24" height="24" />
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="text-body-secondary" href="https://www.facebook.com/profile.php?id=100009151740355" aria-label="Facebook">
                            <img src={face} className="bi" width="24" height="24"/>
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="text-body-secondary" href="https://github.com/AnderYQ29" aria-label="Github">
                            <img src={github} className="bi" width="24" height="24"/>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </footer>
    );
}

export default Footer;