
import { ProductMain } from './components/ProductMain'
import { ProductsProvider } from './context/ProductsContext'
import Header from './views/Header'
import { Routes, Route } from "react-router-dom"
import Carrito from "./views/Carrito"
import Product from './views/Product'
import Footer from './views/Footer'

function App() {

  return (
    <div className="App">
    <ProductsProvider>
      <Header />

      <Routes>
        <Route path="/" element={<ProductMain />}  />
        <Route path="/carrito" element={<Carrito />} />
        <Route exact path='/product/:productId' element={<Product />} />
      </Routes>
      </ProductsProvider>
    <Footer />
    </div>
  )
}

export default App
