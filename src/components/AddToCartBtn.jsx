import { useContext } from "react"

import { ProductsContext } from '../context/ProductsContext';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content"

export const AddToCartBtn = ({ product }) => {

    const { cart, setCart } = useContext(ProductsContext);

    const showSwal = () => {
       
        withReactContent(Swal).fire({
            title: `Producto agregado al carrito`,
            timer: 2000,
            icon: "success",
            showClass: {
                popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `
              }
        })
    }

    const addToCart = (product) => {
        setCart((cart) => [...cart, { ...product, quantity: 1 }]);
        showSwal();
    }





    return (
        <>
            <button className="btn_addToCart" onClick={() => addToCart(product)}>
                Add to Cart
                <i className="fa-solid fa-cart-plus"></i>
            </button>


        </>
    )
}
