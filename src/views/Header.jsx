import { useContext } from "react"
import { Link } from "react-router-dom"
import { ProductsContext } from "../context/ProductsContext"
import SearchForm from "../components/SearchForm";

function Header() {
    const { cart } = useContext(ProductsContext);

    return (
        <header>
        <div>
            Logo
            <SearchForm />

        </div>
            <nav>

                <Link to="/">Inicio</Link>
                Mi cuenta
                <Link to="/carrito">Carrito <span className="btn_addToCart"><i className="fa-solid fa-cart-plus"></i>{cart.length}</span></Link>
            </nav>

        </header>

    )
}

export default Header