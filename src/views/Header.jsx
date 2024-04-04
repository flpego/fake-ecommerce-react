import { useContext } from "react"
import { Link } from "react-router-dom"
import { ProductsContext } from "../context/ProductsContext"

function Header() {
    const { cart } = useContext(ProductsContext);

    return (
        <header>
            <div className="nav_logo_container">
                <Link to="/" className="nav_logo">FakE-Market</Link>
            </div>
            <nav>

                <Link to="/">Inicio</Link>
                Mi cuenta
                <Link to="/carrito"> Carrito </Link>
                <Link to="/carrito"> <span className=""><i className="fa-solid fa-cart-plus"></i>{cart.length}</span> </Link>

            </nav>

        </header>

    )
}

export default Header