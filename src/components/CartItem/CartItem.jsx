import { BsCartX } from 'react-icons/bs'
import formatCurrency from '../../utils/formatCurrency'
import './CartItem.css';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import AppContext from '../../context/AppContext'
const CartItem = ({ data }) => {
    const { cartItems, setCartItems } = useContext(AppContext)
    const { id, thumbnail, title, price} = data
    const handleRemoveItem = () => {
        const updatedItems = cartItems.filter((item) => item.id != id)
        setCartItems(updatedItems)
    }
    return (
        <div className="cart-item">
            <img
            src={thumbnail}
            alt="product image"
            className="cart-item-image"
            />
            <div className="cart-item-info">
                <h3 className="cart-item-title">{title}</h3>
                <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3>
                <button
                type="button"
                className="button-remove-item"
                onClick={ handleRemoveItem }
                >
                    <BsCartX />
                </button>
            </div>
        </div>
    )
}
export default CartItem

CartItem.propTypes = {
    data: PropTypes.object
}.isRequired