import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

export const CartTableRow = ({ productId, title, image, price, quantity }) => {
    const { removeProductFromCart, updateQuantity, total } = useContext(ProductsContext);

    const updatePrice = (productId, newQuantity) => {
        updateQuantity(productId, newQuantity);
    };

    return (
        <tr key={productId}>
            <td>
                <button onClick={() => removeProductFromCart(productId)}>X</button>
                
                <img src={image} alt="" className="image" /> - {title}
            </td>
            <td>
                <button onClick={() => updatePrice(productId, quantity - 1)}>-</button>
                <span>{quantity}</span>
                <button onClick={() => updatePrice(productId, quantity + 1)}>+</button>
            </td>
            <td>
                {price * quantity}
            </td>
        </tr>
    );
};
