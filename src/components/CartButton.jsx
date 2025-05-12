
import { ShoppingCart } from "lucide-react";
import useCartStore from "../store/cartStore";
import { Link } from "react-router";


const CartButton = () => {
    const cartItems = useCartStore((state) => state.cartItems);
    const totalQuantity = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);

    return (
        <Link to="/cart" className="position-fixed bottom-0 end-0 m-4 btn btn-dark rounded-circle shadow"
        style={{width:"60px", height:"60px", zIndex:1000}}>
            <div className="position-relative">
                <ShoppingCart size={24} color="#fff" />
                    {totalQuantity > 0 && (
                        <span
                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                        style={{fontSize:"0.7rem"}}
                        >
                            {totalQuantity}
                        </span>
                    )}
            </div>
        </Link>
    );
}

export default CartButton;