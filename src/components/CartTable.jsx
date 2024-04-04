import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

export const CartTableRow = ({ productId, title, image, price, quantity }) => {
    const { removeProductFromCart, updateQuantity, total } = useContext(ProductsContext);

    const updatePrice = (productId, newQuantity) => {
        updateQuantity(productId, newQuantity);
    };

    return (
        <tr key={productId} className="cart_tr">
            <td className="cart_info_td">
                <button onClick={() => removeProductFromCart(productId)}><i className="fa-solid fa-trash-can"></i></button>
                
                <img src={image} alt="" className="image" /> - {title}
            </td>
            <td className="cart_quantity"> 
                <button onClick={() => updatePrice(productId, quantity - 1)}>-</button>
                <span>{quantity}</span>
                <button onClick={() => updatePrice(productId, quantity + 1)}>+</button>
            </td>
            <td >
              $  {price * quantity}
            </td>
        </tr>
    );
};
