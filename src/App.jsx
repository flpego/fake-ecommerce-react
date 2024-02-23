
import './App.css'
import { ProductsList } from './components/ProductList'
import { ProductsProvider } from './context/ProductsContext'
import { ProductModal } from './components/ProductModal'
import Header from './views/Header'

function App() {

  return (
    <div className="App">
    <Header />
      <ProductsProvider>
        <ProductsList />
        <ProductModal />
      </ProductsProvider>

    </div>
  )
}

export default App
