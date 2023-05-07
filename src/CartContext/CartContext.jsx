import { createContext, useContext, useState } from "react";


const CartContext = createContext([]);

export const useCartContext = ()=> useContext(CartContext);

export const CartContextProvider = ({children})=>{

    const[cartList, setCartList]=useState([]);
   
    const addToCart = (e)=>{

        setCartList([
            ...cartList,
            e]
        );

    }

    // console.log("lista de productos del carro", cartList)


    return(
        <CartContext.Provider value={{
            cartList,
            addToCart
        }}>
            {children}            
        </CartContext.Provider>
    )
}