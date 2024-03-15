import React, { useContext, useState, useEffect } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import RenderProducts from './RenderProducts';
import Slider from './SliderMain';

import { FilterProductsForm } from './FilterProductsForm';

export const ProductMain = () => {

    const { productsList, categories } = useContext(ProductsContext); //recibe categorias y productos por context

    const [originalProducts, setOriginalProducts] = useState(productsList); //estado para controlar la lista de productos
    const [categoryValue, setCategoryValue] = useState("1"); //estado para manejar los filtros

    useEffect(() => {
        setOriginalProducts(productsList);
    }, [productsList]);

    //funcion para filtrar
    const handleFilter = (categoryValue) => {
        if (categoryValue === "1") {
            setOriginalProducts(productsList);
        } else {
            const filteredData = productsList.filter(product => product.category === categoryValue);
            setOriginalProducts(filteredData);
        }
    };
    //manejar envio de filtro
    const handleSubmit = (e) => {
        e.preventDefault();
        handleFilter(categoryValue);
    };

    return (<>

        <div className='products_main' >
            <Slider />


            <div className='products_main_grid'>
                <FilterProductsForm
                    categories={categories}
                    categoryValue={categoryValue}
                    setCategoryValue={setCategoryValue}
                    handleSubmit={handleSubmit}
                />

                <RenderProducts productsList={originalProducts} />
            </div>
        </div>

    </>

    );
};
