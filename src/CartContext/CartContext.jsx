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

    const cleanCart = ()=>{
        setCartList([]);
    }

    const removeProduct = (id)=>{
        console.log(cartList);
        const aux = cartList.filter(e => e.producto.id != id);        
        setCartList(aux);
    }


    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            removeProduct,
            cleanCart
        }}>
            {children}            
        </CartContext.Provider>
    )
}