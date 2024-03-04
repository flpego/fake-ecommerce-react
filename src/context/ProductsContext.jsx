import { useEffect, createContext, useState } from "react";
import { fetchProducts } from "../api/fetchProducts";

export const ProductsContext = createContext(); //creamos contexto

export const ProductsProvider = ({ children }) => {

    const [productsList, setProductsList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0)


    const removeProductFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId))
    };
    const updateQuantity = (productId, newQuantity) => {
        setCart(prevCart => {
            return prevCart.map(item => {
                if (item.id === productId) {
                    return { ...item, quantity: newQuantity };
                }
                console.log(item)
                return item;
            });
        });
    };


    useEffect(() => {
        
            const totalPrice = cart.reduce((acc, product) => acc + (product.price *product.quantity), 0);
            setTotal(totalPrice);

    }, [cart]);


    //cuando carga la app, hace la llamada a la Api
    useEffect(() => {
        const fetchDataProducts = async () => {
            const data = await fetchProducts();
            setProductsList(data)
        };
        fetchDataProducts();
    }, []);
    //se establece lista de categorias, disponibles en el contexto
    useEffect(() => {
        const dataCategories = [...new Set(productsList.map(product => product.category))]
        setCategories(dataCategories)
    }, [productsList]);



    const productContextValue = {
        productsList,
        categories,
        cart,
        setCart,
        setTotal,
        total,
        removeProductFromCart,
        updateQuantity
    }

    return (
        <ProductsContext.Provider value={productContextValue} >
            {children}
        </ProductsContext.Provider>
    )
}