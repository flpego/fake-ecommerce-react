import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../context/ProductsContext'
import { CartTableRow } from '../components/CartTable';
import Slider from '../components/SliderMain';

function Carrito() {
  const { cart, total } = useContext(ProductsContext);

  if (cart.filter(product => product.id == product.id)) {
    console.log(cart)
  }


  return (
    <div className='cart_div_container'>
      {cart.length === 0 ? (<div>
        <h1 className='sin_productos'>No hay productos en el carrito</h1>
      <Slider />
      </div> 
      ) : <table>
        <thead>
          <tr className='cart_tr'>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>

        <tbody>
          {cart.length == 0 ? (
            <tr>
              <td colSpan="3" className='sin_productos'></td>
            </tr>
          ) : cart.map((product) =>
            <CartTableRow key={product.id} productId={product.id} title={product.title} image={product.image} price={product.price} quantity={product.quantity} />
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2">Total $ </td>
            <td>{total}</td>
          </tr>
          <tr >
            <td colSpan="3">
              <button className='btn_comprar'>Comprar <i class="fa-solid fa-dollar-sign"></i>{total}</button>
            </td>
          </tr>
        </tfoot>
      </table>
      }

    </div>
  )
}

export default Carrito