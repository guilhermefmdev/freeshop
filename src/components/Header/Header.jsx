import SearchBar from "../SearchBar/SearchBar"
import CartBtn from "../CartBtn/CartBtn"
import './Header.css'
const Header = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <SearchBar />
                    <CartBtn />
                </div>
            </header>
        </>
    )
}
export default Header