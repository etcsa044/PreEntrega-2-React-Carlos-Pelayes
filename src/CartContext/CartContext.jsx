import { createContext, useContext, useState } from "react";


const CartContext = createContext([]);

export const useCartContext = ()=> useContext(CartContext);

export const CartContextProvider = ({children})=>{

    const[cartList, setCartList]=useState([]);
   
    const addToCart = (prod, count = 0)=>{
        const index = cartList.findIndex((p) => p.id === prod.id);
        
        if (index !== -1) {
            let cartCopy = [...cartList]      
            const repeated = cartCopy[index];
            repeated.quantity += count;
            setCartList(cartCopy);
          }else{

            let productToAdd = {...prod, quantity:count}

              setCartList([
                  ...cartList,
                  productToAdd]
              );            
          }
    }

    const cleanCart = ()=>{
        setCartList([]);
    }

    const removeProduct = (id)=>{
        console.log(cartList);
        const aux = cartList.filter(e => e.id != id);        
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