import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "./App.css"
import Header from "./compenents/Header/Header"
import ItemListContainer from "./compenents/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./compenents/ItemDetailsContainer/ItemDetailContainer"
import { Navigate, Route, Routes } from "react-router-dom"
import { ItemList } from "./compenents/ItemList/ItemList"


function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/detail/:pid" element={<ItemDetailContainer />}/>          
        <Route path="/groundActivities/" element={<ItemListContainer />}/>          
        <Route path="/airActivities/" element={<ItemListContainer />}/>          
        <Route path="*" element={<Navigate to={"/"}/>}/>
      </Routes>
    </>

  )

}

export default App
