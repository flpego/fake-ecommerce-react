import { useState } from "react"
import { fetchSingleProduct } from "../api/fetchProducts"
import { ProductModal } from "./ProductModal"

export const ProductCards = ({ productId, title, image, price }) => {

  const [product, setProduct] = useState({})
  const [modalVisible, setModalVisible] = useState(false);

  const handleClick = async (productId) => {

    try {
      const dataProduct = await fetchSingleProduct(productId);
      setProduct(dataProduct);
      setModalVisible(true);
    }catch (error){
      console.error(error)
    }
    
   }

  return (
    <div key={productId}  className="product_cards">
      <h4>{title.length > 20 ? title.substring(0, 30) + "..." : title}</h4>
      <img src={image} alt="" className='image' loading="lazy"/>
      <p>$ {price}</p>
      <button onClick={() => { handleClick(productId) }}>View Details</button>
      <ProductModal product={product} visible={modalVisible} onClose={() => setModalVisible(false)} />
    </div>
  )
}
