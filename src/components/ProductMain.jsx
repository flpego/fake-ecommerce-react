import React, { useContext, useState, useEffect } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import RenderProducts from './RenderProducts';
import Slider from './SliderMain';
import { FilterProductsForm } from './FilterProductsForm';
import SearchForm from './SearchForm';

export const ProductMain = () => {

    const { productsList, categories } = useContext(ProductsContext); //recibe categorias y productos por context

    const [originalProducts, setOriginalProducts] = useState(productsList); //estado para controlar la lista de productos
    const [categoryValue, setCategoryValue] = useState("1"); //estado para manejar los filtros
    //estado para mostrar sugerencia
    const [searchSuggestions, setSearchSuggestions] = useState([]);

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
    };

    const handleSearchSubmit = (searchValue) => {
        const searchedData = productsList.filter((product) =>
        product.title.toLowerCase().includes(searchValue.toLowerCase())
      );
        setOriginalProducts(searchedData);
    };

    const handleSearchChange = (searchValue) => { 
        const suggestions = productsList
        .filter((product) => product.title.toLowerCase().includes(searchValue.toLowerCase()))
        .map((product) => product.title);
        setSearchSuggestions(suggestions)
     }

    return (<>

        <div className='products_main' >
            <Slider />

            <h2>Ofertas de Temporada</h2>

            <div className='products_main_grid'>
                <div>
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

    </>

    );
};
