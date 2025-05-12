import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartButton from '../components/CartButton';

const PrimaryLayout = () => {
return (
    <>
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <main className='flex-grow-1'>
            <Outlet />
            <CartButton />
            </main>
            <Footer />
        </div>
    </>
);
};

export default PrimaryLayout;
