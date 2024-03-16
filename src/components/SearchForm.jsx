import { useState } from "react"

function SearchForm({onSubmit}) {

    const [inputValue, setInputValue] = useState("")

    const handleChange = (e) => {
        setInputValue(e.target.value)
        console.log(inputValue)
    }


    return (

        <div>
            <label htmlFor="">Buscar</label>
            <form className='search_form' onSubmit={onSubmit}>
                <input type="text" value={inputValue} onChange={ handleChange}/>
                <button><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div>

    
    )
}

export default SearchForm