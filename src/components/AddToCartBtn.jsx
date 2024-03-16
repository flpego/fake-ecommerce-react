import { useContext, useState } from "react"

import { ProductsContext } from '../context/ProductsContext';

export const AddToCartBtn = ({ product }) => {

    const { cart, setCart } = useContext(ProductsContext);
    const [alert, setAlert] = useState(false)


    const addToCart = (product) => {
        setCart((cart) => [...cart, { ...product, quantity: 1 }])
        setAlert(true)
    }

    const hideAlert = () => {
        setAlert(false)
    }



    return (
        <>
            <button className="btn_addToCart" onClick={() => addToCart(product)}>
                Add to Cart
                <i className="fa-solid fa-cart-plus"></i>
            </button>

            {alert && (
                <div className="alert">
                <div>

                    <span>{product.title} added successfully!</span>
                </div>
                    <button onClick={hideAlert}>Close</button>
                </div>
            )}
        </>
    )
}
