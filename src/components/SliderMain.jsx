import { useContext, useEffect } from "react"
import { ProductsContext } from "../context/ProductsContext";
import { Link } from "react-router-dom";
import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import "swiper/css";
import "swiper/scss/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/bundle';
import { RatingStars } from "./RatingStars";

function Slider() {
    const { productsList } = useContext(ProductsContext);
    const filterProducts = productsList.filter((product) => product.category === "electronics");
    useEffect(() => {
        const swiper = new Swiper('.swiper', {
            // configure Swiper to use modules
            spaceBetween: 10,
            modules: [Navigation, Scrollbar],
            direction: 'horizontal',
            loop: false,
    
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
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                  },
                  // when window width is >= 480px
                  480: {
                    slidesPerView: 2,
                    spaceBetween: 30
                  },
                  // when window width is >= 640px
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 40
                  }
            }

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

                                            <span className="span_descriptions" >{product.title.length > 20 ? product.title.substring(0, 30) + "..." : product.title} </span >
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