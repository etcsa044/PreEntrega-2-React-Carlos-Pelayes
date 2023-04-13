import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CartContext } from './CartContext/CartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
  <CartContext.Provider value={[]}/>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <CartContext.Provider />
  </React.StrictMode>,
)
