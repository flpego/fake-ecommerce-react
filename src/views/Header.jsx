import { useContext } from "react"
import { Link } from "react-router-dom"
import { ProductsContext } from "../context/ProductsContext"

function Header() {
    const { cart } = useContext(ProductsContext);

    return (
        <header>
        <div>
            
            <Link to="/"><img src="/src/assets/logo.png" alt="Logotipo" /></Link>

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