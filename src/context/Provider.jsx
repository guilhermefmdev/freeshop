import { useState } from "react"
import AppContext from "./AppContext"
const Provider = ({ children } = Provider.propTypes) => {

    const [products, setProducts,] = useState([])
    const [ loading, setLoading] = useState(true)
    const [cartItems, setCartItems ] = useState([])
    const [isCartVisible, setIsCartVisible ] = useState(false)
    return (
        <AppContext.Provider value={{
            products,
            setProducts,
            loading,
            setLoading,
            cartItems,
            setCartItems,
            isCartVisible,
            setIsCartVisible
            }}>
            {children}
        </AppContext.Provider>
    )
}
export default Provider