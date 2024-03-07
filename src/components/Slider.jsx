import { useContext, useEffect, useRef, useState } from "react"
import { ProductsContext } from "../context/ProductsContext";

function Slider() {

    const { productsList } = useContext(ProductsContext);
    const filterProducts = productsList.filter((product) => product.category === "electronics");


    const imageRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0)
    useEffect(() => {
        const listNode = imageRef.current;
        const imgNode = listNode.querySelectorAll("li > img")[currentIndex];
        console.log(imgNode)
        if (imgNode) {
            imgNode.scrollIntoView({
                behavior: "smooth",
            })

        }
    }, [currentIndex]);

    const scrollToImg = (direction) => { 
        let newIndex;
        const lastIndex = filterProducts.length - 1;
    
        if (direction === "prev") {
            newIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
        } else if (direction === "next") {
            newIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
        }
    
        setCurrentIndex(newIndex);
     }

    return (
        <div className="slider_main">
            <div className="slider_container">
                <div className="leftArrow" onClick={() => scrollToImg("prev")}> &#8592;</div>
                <div className="rightArrow" onClick={() => scrollToImg("next")}> &#8594; </div>
                <div className="image_container">
                    <ul ref={imageRef}>
                        {
                            filterProducts.map((product, index) => {
                                return (<li key={product.id} style={{ display: index === currentIndex ? "block" : "none" }}>
                                    <img src={product.image} alt="" loading="lazy"/>
                                <h4>Compra en oferta {product.title} a tan solo ${product.price}</h4>

                                </li>)
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Slider