import './ProductCard.css'
import { BsFillCartPlusFill } from 'react-icons/bs'
import formatCurrency from '../../utils/formatCurrency'
import { useContext } from 'react'
import AppContext from '../../context/AppContext'

const ProductCard = ({ data } = ProductCard.propTypes) => {
    const { cartItems, setCartItems } = useContext(AppContext)
    const handleAddCart = () => setCartItems([ ...cartItems, data])

    return (
        <div className='product-card'>
            <img src={data.thumbnail.replace(/\w.jpg/gi, "W.jpg")} alt="Product-image" className='product-image' />
            <div className='product-infos'>
                <h3 className='product-price'>{formatCurrency(data.price, 'BRL')}</h3>
                <h2 className='product-title'>{data.title}</h2>
            </div>
            <button
            type='button'
            className='btn-add-cart'
            onClick={ handleAddCart }
            >
                <BsFillCartPlusFill />
            </button>
        </div>
    )
}
export default ProductCard