import { useContext, useEffect } from "react"
import { ProductsContext } from "../context/ProductsContext";
import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import Swiper bundle with all modules installed

// import styles bundle
import 'swiper/css/bundle';
import { Link } from "react-router-dom";
import { RatingStars } from "./RatingStars";

function Slider() {
    const { productsList } = useContext(ProductsContext);
    const filterProducts = productsList.filter((product) => product.category === "electronics");
    useEffect(() => {
        const swiper = new Swiper('.swiper', {
            // configure Swiper to use modules
            slidesPerView: 3,
            spaceBetween: 10,
            modules: [Navigation, Scrollbar],
            direction: 'horizontal',
            loop: false,
            autoplay: {
                delay: 3000,
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

        <div className="swipper_container">
            <div className="swiper slider1">
                <h4> Ofertas de la semana</h4>
                <div className="swiper-wrapper" key={1}>
                    {
                        filterProducts.map((product, index) => {
                            return (
                                <Link to={`/product/${product.id}` } className="swiper-slide">

                                    <li key={product.id} className="swiper-slide" >
                                        <div className="card_image">

                                            <img src={product.image} alt="" loading="lazy" />
                                        </div>
                                        <div className="card_info">

                                            <a>{product.title.length > 20 ? product.title.substring(0, 30) + "..." : product.title} </a>
                                            <RatingStars rateProp={product.rating.rate}/>
                                            <p>$ {product.price} <span className="span-green">en 6x {(product.price / 6).toFixed(2)}</span></p>

                                        </div>


                                    </li>
                                </Link>)
                        })
                    }

                </div>

                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>

                <div className="swiper-scrollbar"></div>
            </div>

        </div>


    </>
    )
}

export default Slider