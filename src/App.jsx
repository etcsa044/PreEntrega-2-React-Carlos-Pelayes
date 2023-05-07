import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "./App.css"
import Header from "./compenents/Header/Header"
import ItemListContainer from "./compenents/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./compenents/ItemDetailsContainer/ItemDetailContainer"
import { Navigate, Route, Routes } from "react-router-dom"
import {Cart} from "./compenents/Cart/Cart.jsx"


function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/category/:pcat" element={<ItemListContainer />}/>          
        <Route path="/detail/:pid" element={<ItemDetailContainer />}/>
        <Route path="/cart/" element={<Cart />}/><Route path="*" element={<Navigate to={"/"}/>}/>
      </Routes>
    </>

  )

}

export default App
