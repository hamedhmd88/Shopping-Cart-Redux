import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './app/store.js'

import App from './App.jsx'
import './index.css'
import './global.css'
// import CartProvider from './context/CartProvider.jsx'
// import ProductsProvider from './context/ProductsProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/* <CartProvider> */}
  {/* <ProductsProvider> */}
  <Provider store={store}>
    <App />
    </Provider>
    {/* </ProductsProvider> */}
    {/* // </CartProvider> */}
    </BrowserRouter>
)
