import { useParams } from "react-router-dom";
import { AddToCartBtn } from "../components/AddToCartBtn";
import { fetchSingleProduct } from "../api/fetchProducts"
import { useEffect, useState } from "react";
import { RatingStars } from "../components/RatingStars";
import { Loader } from "../components/Loader";

function Product() {

    const [product, setProduct] = useState(null)

    const { productId } = useParams();
    console.log(productId)




    useEffect(() => {
        const loadProduct = async () => {
            try {
                const productData = await fetchSingleProduct(productId);
                setProduct(productData);
                console.log(product)
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        loadProduct();
    }, [productId])


    return (
        <>
            {product ? ( // comprobamos que product no sea Null
                <div className="single_product_container">
                    <div className="single_product_image">
                        <img src={product.image} alt="" loading="lazy"/>
                    </div>
                    <div className="single_product_info">

                        <h2>{product.title}</h2>
                        <RatingStars rateProp={product.rating.rate}/>

                        <p> <span className="price">$ {product.price}  /</span>
                            <span className="span-green">Mismo precio en 3 cuotas de <span className="price">
                                $ {(product.price / 3).toFixed(2)}
                            </span></span></p>
                        <p>
                            <span className="span-green">Llega gratis </span>entre el martes y el miércoles
                        </p>
                        <p>
                            <span className="span-blue">Más formas de entrega</span>
                        </p>
                        <p>
                            <span className="span-green">Devolución gratis   </span>
                        </p>
                        <p>
                            Tenés 30 días desde que lo recibís.
                        </p>
                        <AddToCartBtn product={product} />

                    </div>
                </div>
            ) : <Loader />}



        </>
    )
}

export default Product;

const loadProductById = async () => {
    try {



    } catch (error) {
        console.error(error);
    }
}