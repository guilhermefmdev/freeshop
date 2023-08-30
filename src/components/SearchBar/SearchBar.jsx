import { useContext, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import './SearchBar.css'
import fetchProducts from '../../api/fetchProducts'
import AppContext from '../../context/AppContext'
const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('')
    const { setProducts, setLoading } = useContext(AppContext)

    const handleSearch = async (e) => {
        e.preventDefault()
        setLoading(true)
        const products = await fetchProducts(searchValue)
        setProducts(products)
        setLoading(false)
        setSearchValue('')
    }



    return (
        <form className='search-bar' onSubmit={handleSearch}>
            <input
                type="search"
                value={searchValue}
                placeholder="Buscar produtos"
                className="search-input"
                onChange={({ target }) => setSearchValue(target.value)}
                required
            />

            <button
                type="submit"
                className="search-button"
            >
                <BiSearch />
            </button>
        </form>
    )
}
export default SearchBar