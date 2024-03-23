import { useEffect, createContext, useState } from "react";
import { fetchProducts } from "../api/fetchProducts";

import ErrorPage from "../components/ErrorPage";

export const ProductsContext = createContext(); //creamos contexto

export const ProductsProvider = ({ children }) => {

    const [productsList, setProductsList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [loader, setLoader] = useState(false)

    
    


    const [error, setError] = useState(null);


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
        const totalPrice = cart.reduce((acc, product) => acc + (product.price * product.quantity), 0);
        setTotal(totalPrice);
    }, [cart]);


    //cuando carga la app, hace la llamada a la Api
    useEffect(() => {
        setLoader(true);
        const fetchDataProducts = async () => {
            try {
                const data = await fetchProducts();
                setProductsList(data);
                setLoader(false);
            } catch (error) {
                console.log('Error fetching products:', error);
                setError(error);
            }
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
        error,
        removeProductFromCart,
        updateQuantity,
        loader
    }

    return (
        <ProductsContext.Provider value={productContextValue} >
            {error ? ( // Verifica si hay un error y renderiza la página de error si es así
                <ErrorPage error={error} />
            ) : (
                children // Renderiza los hijos normales si no hay error
            )}
        </ProductsContext.Provider>
    )
}