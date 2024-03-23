import { useState } from "react"

function SearchForm({ handleSubmit, suggestions, handleChange }) {

    const [inputValue, setInputValue] = useState("")

    const onChange = (e) => {
        const value = e.target.value
        setInputValue(value)
        handleChange(value)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(inputValue)
    }
    const handleSuggestionClick = (suggestions) => {
        setInputValue(suggestions);
        handleSubmit(suggestions);
    };

    return (

        <div className="search_form_container">
            <label htmlFor="searchInput">Buscar</label>
            <form className='search_form' onSubmit={onSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={onChange}
                    placeholder="Busca un producto..."
                    id="searchInput"
                />
                <button type="submit">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
            {inputValue && inputValue.trim() !== "" && ( // verifica que input no está vacío
                <ul className="suggestions">
                    {suggestions.slice(0, 5).map((suggestion, index) => (
                        <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                            {suggestion.length > 4 ? suggestion.substring(0, 30) + "..." : suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>


    )
}

export default SearchForm