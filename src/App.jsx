
import './App.css'
import { ProductsList } from './components/ProductList'
import { ProductsProvider } from './context/ProductsContext'
import Header from './views/Header'
import { Routes, Route } from "react-router-dom"
import Carrito from "./views/Carrito"

function App() {

  return (
    <div className="App">
    <ProductsProvider>
      <Header />

      <Routes>
        <Route path="/" element={<ProductsList />}  />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
      </ProductsProvider>

    </div>
  )
}

export default App
