import { useParams } from "react-router-dom";
import { ItemCounter } from "../ItemCounter/ItemCounter"
import { useState } from "react";
import { useCartContext } from "../../CartContext/CartContext";
import "./ItemDetail.css"

export const ItemDetail = ({ product }) => {

  const { addToCart} = useCartContext()

  console.log(product);
  
  const handleAdd = (counter) => {    
      addToCart(product, counter);
  };
  
  


  return (
    <article className="ItemDetail">
      <img src={product.imgHd} alt="" />

      <div className="ItemDescription">
        <h3>{product.title}</h3>
        <p>{product.detail}</p>
      </div>
      <div>
        <ItemCounter
          initial={product.initial}
          stock={product.stock}
          onAdd={handleAdd}
        />
      </div>
    </article>
  );
};