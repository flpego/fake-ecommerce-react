import { useContext } from "react"
import { ProductsContext } from "../context/ProductsContext"

export const CartTableRow = ({ productId, title, image, price, quantity}) => {
    const {removeProductFromCart, updateQuantity, setTotal} = useContext(ProductsContext)
    const updatePrice = (productId, newQuantity) => {
        const totalPrice = price * newQuantity;
        setTotal(totalPrice);
    };
    return (

        <tr key={productId}>
            <td>
            <button onClick={() =>removeProductFromCart(productId)}>X</button>

                <img src={image} alt="" className="image" /> - {title}
            </td>
            <td>
                <button onClick={() => updateQuantity(productId, quantity + 1)}>+</button>
                <span>{quantity}</span>
                <button onClick={() => updateQuantity(productId, quantity - 1)}>-</button>
                -
            </td>
            <td>
                {price}
            </td>

        </tr>


    )
}
