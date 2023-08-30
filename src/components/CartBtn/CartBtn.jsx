import { BiCart } from 'react-icons/bi'
import './CartBtn.css'
import { useContext } from 'react'
import AppContext from '../../context/AppContext'
const CartBtn = () => {

    const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext)

    return (
        <button
        type="button"
        className="cart-btn"
        onClick={() => setIsCartVisible(!isCartVisible)}
        >
            <BiCart />
            {cartItems.length === 0 ? '' : <span className='cart-status'>{cartItems.length}</span> }
        </button>
    )
}
export default CartBtn