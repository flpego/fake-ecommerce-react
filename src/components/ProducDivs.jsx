import { useState } from "react"
import { fetchSingleProduct } from "../api/fetchProducts"
import { Link, useParams } from "react-router-dom"

export const ProductCards = ({ productId, title, image, price }) => {

  const [product, setProduct] = useState([])
  const params = useParams();

  const handleClick = async (productId) => {

    try {
      const dataProduct = await fetchSingleProduct(productId);
      setProduct(dataProduct);

      console.log(dataProduct)
    } catch (error) {
      console.error(error)
    }

  }

  return (
    <div key={productId} className="product_cards">
      <img src={image} alt="" className='image' loading="lazy" />
      <div className="product_info">
        <h4>{title.length > 20 ? title.substring(0, 30) + "..." : title}</h4>
        <p>$ {price}</p>
      </div>
      <Link to={`/product/${productId}`} onClick={() => handleClick(productId)} >View Details</Link>
    </div>
  )
}
