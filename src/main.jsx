import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./scss/styles.scss"
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter basename="/fake-ecommerce-react">
        <App />
    </BrowserRouter>
)
