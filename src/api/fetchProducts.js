import axios from 'axios'
const fetchProducts = async (query) => {
    const response = await axios(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
    const data = response.data
    return data.results
}

export default fetchProducts