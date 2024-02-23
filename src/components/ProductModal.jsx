import { AddToCartBtn } from "./AddToCartBtn";

    export const ProductModal = ({ product, visible, onClose }) => {
        
        return (
            <>
                {visible && (
                    <div className="modalContainer">
                        <div className="modal">
                            <header className="modal_header">
                                <h2 className="modal_header-title">{product.title}</h2>
                                <button className="close" onClick={onClose}>
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                            </header>
                            <main className="modal_content">
                                <img src={product.image} alt={product.title} className="image" />
                                <p>Price: ${product.price}</p>
                                <p>{product.description}</p>
                                <p>{product.rating.count}</p>
                                <p>{product.rating.rate}</p>
                            </main>
                            <footer className="modal_footer">
                                <button className="modal-close" onClick={onClose}>
                                    Cancel
                                </button>
                                <AddToCartBtn product={product}/>
                            </footer>
                        </div>
                    </div>
                )}
            </>
        )
    }
