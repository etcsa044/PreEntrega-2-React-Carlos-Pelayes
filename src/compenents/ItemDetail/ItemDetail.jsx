import { useParams } from "react-router-dom";
import { ItemCounter } from "../ItemCounter/ItemCounter"
import { useState } from "react";
import { useCartContext } from "../../CartContext/CartContext";
import "./ItemDetail.css"

export const ItemDetail = ({ products }) => {
  const { addToCart, cartList} = useCartContext()
  const [quantityAdded, setQuantityAdded] = useState(1);

  const handleAdd = (count) => {    
    const index = cart.findIndex((e) => e.producto.id === prod.id);
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



  const productos = products;
  const { pid } = useParams();
  const prod = productos.find((e) => e.id == pid);

  const productToAdd = {
    producto: prod,
    quantity: quantityAdded
  }

  return (
    <article className="ItemDetail">
      <img src={prod.imgHd} alt="" />

      <div className="ItemDescription">
        <h3>{prod.title}</h3>
        <p>{prod.detail}</p>
      </div>
      <div>
        <ItemCounter
          initial={1}
          stock={prod.stock}
          onAdd={handleAdd}
          quantity={quantityAdded}
        />
      </div>
    </article>
  );
};