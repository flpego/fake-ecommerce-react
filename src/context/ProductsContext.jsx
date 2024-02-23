import { useEffect, createContext, useState } from "react";
import { fetchProducts } from "../api/fetchProducts";

export const ProductsContext = createContext(); //creamos contexto

export const ProductsProvider = ({ children }) => {

    const [productsList, setProductsList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [cart, setCart] = useState([]);



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
    }, [productsList])

    const productContextValue = {
        productsList,
        categories,
        cart,
        setCart
    }

    return (
        <ProductsContext.Provider value={productContextValue} >
            {children}
        </ProductsContext.Provider>
    )
}