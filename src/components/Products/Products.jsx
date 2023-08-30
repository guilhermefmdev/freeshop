import { useEffect, useContext } from 'react'
import fetchProducts from '../../api/fetchProducts'
import ProductCard from '../ProductCard/ProductCard'
import Loading from '../Loading/Loading'
import './Products.css'
import AppContext from '../../context/AppContext'
const Products = () => {

    const { products, setProducts, loading, setLoading } = useContext(AppContext)

    useEffect(() => {
        fetchProducts().then((res) => {
            setProducts(res)
            setLoading(false)
        })
    }, [setLoading, setProducts])
    return (
        (loading && <Loading />) ||
        (<section className="products container">
            { products.map((product) => <ProductCard key="product.id" data={product} />) }
        </section>)
    )
}
export default Products