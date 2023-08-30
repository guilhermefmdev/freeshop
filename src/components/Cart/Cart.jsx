import { useContext } from 'react'
import CartItem from '../CartItem/CartItem'
import './Cart.css'
import AppContext from '../../context/AppContext'
import formatCurrency from '../../utils/formatCurrency'
const Cart = () => {
    const { cartItems, isCartVisible } = useContext(AppContext)
    const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0)
    return (
        <section className={`cart ${isCartVisible ? 'cart-active' : ''}`}>
            {
                Object.keys(cartItems).length == 0
                    ? <div className='empty-cart-text'>
                        <h1>Seu carrinho está vazio... :{'('}</h1>
                        <h2>Navegue pelos produtos e aproveite!!</h2>
                    </div>
                    : <div className="cart-items">
                        {cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />)}
                    </div>

            }


            <div className="cart-resume">
                valor total: {formatCurrency(totalPrice, 'BRL')}
            </div>
        </section>
    )
}
export default Cart