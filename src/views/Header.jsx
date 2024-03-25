import { useContext } from "react"
import { Link } from "react-router-dom"
import { ProductsContext } from "../context/ProductsContext"

function Header() {
    const { cart } = useContext(ProductsContext);

    return (
        <header>
            <div className="nav_logo_container">


                <Link to="/"><img className="nav_logo" src="/public/images/logo.png" alt="FakeMarket Logo" /></Link>
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