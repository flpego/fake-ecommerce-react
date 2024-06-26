import React, { useContext, useState, useEffect } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import RenderProducts from './RenderProducts';
import Slider from './SliderMain';
import { FilterProductsForm } from './FilterProductsForm';
import SearchForm from './SearchForm';
import { Loader } from './Loader';

export const ProductMain = () => {

    const { productsList, categories, loader } = useContext(ProductsContext); //recibe categorias y productos por context   

    const [originalProducts, setOriginalProducts] = useState(productsList); //estado para controlar la lista de productos
    const [categoryValue, setCategoryValue] = useState("1"); //estado para manejar los filtros
    //estado para mostrar sugerencia
    const [searchSuggestions, setSearchSuggestions] = useState([]);

    const [title, setTitle] = useState("Todos los productos")

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
    const handleFilterSubmit = (e) => {
        e.preventDefault();
        handleFilter(categoryValue);
        setTitle(categoryValue==="1" ? "Todos los productos" :categoryValue.toLocaleUpperCase())
        form.reset()

    };

    const handleSearchSubmit = (searchValue) => {
        const searchedData = productsList.filter((product) =>
            product.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        setOriginalProducts(searchedData);
        setTitle(searchValue === "" ? "Todos los productos" :`Resultados de ${searchValue}...`)
    };

    const handleSearchChange = (searchValue) => {
        const suggestions = productsList
            .filter((product) => product.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((product) => product.title);
        setSearchSuggestions(suggestions)
    }



    return (<>
        {loader ? (<Loader />) : (
            <div className='products_main' >
                <Slider />

                <h2>{title}</h2>

                <div className='products_main_grid'>
                    <div className='forms-container'>
                        <FilterProductsForm
                            categories={categories}
                            categoryValue={categoryValue}
                            setCategoryValue={setCategoryValue}
                            handleSubmit={handleFilterSubmit}
                        />
                        <SearchForm
                            handleSubmit={handleSearchSubmit}
                            suggestions={searchSuggestions}
                            handleChange={handleSearchChange}
                        />

                    </div>


                    <RenderProducts productsList={originalProducts} />
                </div>
            </div>
        )}


    </>

    );
};
