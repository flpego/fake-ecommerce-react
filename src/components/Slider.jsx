import { useContext, useEffect} from "react"
import { ProductsContext } from "../context/ProductsContext";
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import Swiper bundle with all modules installed

// import styles bundle
import 'swiper/css/bundle';

function Slider() {
    const { productsList } = useContext(ProductsContext);
    const filterProducts = productsList.filter((product) => product.category === "electronics");

    useEffect(() => {
        const swiper = new Swiper('.swiper', {
            // configure Swiper to use modules
            modules: [Navigation, Pagination],
            direction: 'horizontal',
            loop: true,
            autoplay: {
                delay: 3000, // Cambiado a 3 segundos, ajusta según sea necesario
            },
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        });


    }, [filterProducts]);




    return (<>


        <div className="swiper">
            <div className="swiper-wrapper">
                {
                    filterProducts.map((product, index) => {
                        return (<li key={product.id} className="swiper-slide" >
                            <img src={product.image} alt="" loading="lazy" />
                            <h4>Compra en oferta {product.title} a tan solo ${product.price}</h4>

                        </li>)
                    })
                }

            </div>
            <div className="swiper-pagination"></div>

            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>

            <div className="swiper-scrollbar"></div>
        </div>
    </>
    )
}

export default Slider