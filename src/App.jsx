import { Route, Routes } from 'react-router'
import './App.css'
import Producto from './pages/Producto'
import AboutUs from './pages/AboutUs'
import PrimaryLayout from './layouts/PrimaryLayout'
import ProductDetail from './pages/ProductDetail'
import Contact from './pages/Contact'
import CartPage from './pages/CartPage'
import Home from './pages/Home'
import './sass/style.css';
import Checkout from './components/Checkout'

function App() {

  return (
    <>
    <Routes>
      <Route element={<PrimaryLayout/>}>
        <Route index element={<Home />} />
        <Route path="producto" element={<Producto />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
      <Route path="*" element={<div>404</div>} />
    </Routes>
    </>
  )
}
export default App
