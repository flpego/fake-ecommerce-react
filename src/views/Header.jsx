import { useContext } from "react"
import { Link } from "react-router-dom"
import { ProductsContext } from "../context/ProductsContext"

function Header() {
    const { cart } = useContext(ProductsContext);

    return (
        <header>
            <nav>

                <Link to="/">Inicio</Link>
                <Link to="/carrito">Carrito <span><i className="fa-solid fa-cart-plus"></i>{cart.length}</span></Link>
                
            </nav>
        </header>

    )
}

export default Header