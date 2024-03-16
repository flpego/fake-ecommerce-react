import SearchForm from "./SearchForm";

export const FilterProductsForm = ({ categories, categoryValue, setCategoryValue, handleSubmit }) => {
    return (
        <div className="filter_and_search_container">
            <form onSubmit={handleSubmit} className="filter_form">
                <label htmlFor="">Filtrar</label>
                <div>
                    <select value={categoryValue} onChange={(e) => setCategoryValue(e.target.value)}>
                        <option value="1">Todos los productos</option>
                        {categories.map((category, index) => <option key={index} value={category}>{category}</option>)}
                    </select>
                    <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </form>
            <SearchForm onSubmit={handleSubmit}/>
        </div>

    );
};
