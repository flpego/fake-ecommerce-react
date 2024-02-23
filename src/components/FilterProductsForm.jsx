
export const FilterProductsForm = ({ categories, categoryValue, setCategoryValue, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <select value={categoryValue} onChange={(e) => setCategoryValue(e.target.value)}>
                    <option value="1">Todos los productos</option>
                    {categories.map((category, index) => <option key={index} value={category}>{category}</option>)}
                </select>
                <button type="submit">Filtrar</button>
            </div>
        </form>
    );
};
