import { useContext } from "react"

import { ProductsContext } from '../context/ProductsContext';

export const AddToCartBtn = ({ product }) => {

    const { cart, setCart } = useContext(ProductsContext);



    const addToCart = (product) => {
        setCart((cart) => [...cart,{...product, quantity: 1}])
        console.log(cart)
    }



    return (
        <button className="btn_addToCart" onClick={() => addToCart(product)}>
            Add to Cart
            <i className="fa-solid fa-cart-plus"></i>
        </button>
    )
}
