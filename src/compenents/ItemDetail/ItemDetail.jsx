import { useParams } from "react-router-dom";
import { ItemCounter } from "../ItemCounter/ItemCounter"
import { useState } from "react";
import { useCartContext } from "../../CartContext/CartContext";
import "./ItemDetail.css"

export const ItemDetail = ({ product }) => {

  const { addToCart, cartList} = useCartContext()
  const [quantityAdded, setQuantityAdded] = useState(1);


  const handleAdd = (count) => {    
    const index = cart.findIndex((e) => e.producto.product.id === prod.product.id);
    if (index !== -1) {
      const repeated = cart[index];      
      repeated.quantity = count;
      cart.splice(index, 1);
      addToCart(repeated);
    }
    else {
      addToCart(productToAdd);
    }
        setQuantityAdded(quantityAdded + count);
  };

  const cart = cartList;


  const prod = {...product}

  const productToAdd = {
    producto: prod,
    quantity: quantityAdded
  }

  return (
    <article className="ItemDetail">
      <img src={prod.product.imgHd} alt="" />

      <div className="ItemDescription">
        <h3>{prod.product.title}</h3>
        <p>{prod.product.detail}</p>
      </div>
      <div>
        <ItemCounter
          initial={prod.product.initial}
          stock={prod.product.stock}
          onAdd={handleAdd}
          quantity={quantityAdded}
        />
      </div>
    </article>
  );
};