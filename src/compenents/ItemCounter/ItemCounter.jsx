import { useState } from "react";
import "./ItemCounter.css";
import { Link } from "react-router-dom";

export const ItemCounter = ({ stock = 5, initial = 0, onAdd, quantity }) => {
  const [counter, setCounter] = useState(1);
  const [added, setAdded] = useState(false); // variable para controlar si se ha agregado el producto

  const increment = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handleAdd = () => {
      setAdded(true); // marca que se ha agregado el producto
      onAdd(counter);    
  };



  return (
    <div className="ItemCounter">
      <button id="menos" onClick={decrement}>
        -
      </button>
      <button id="mas" onClick={()=>{increment()}}>
        +
      </button>
      <p id="contador">{counter}</p>
      
      
      <button id={`add-btn${!added ? "-enabled" : ""}`} onClick={() => handleAdd()} disabled = {counter == 0}>Agregar</button>

        {added &&   
        <Link to={`/cart/`}>
          <button>Finalizar compra</button>
        </Link>
        }
     
    </div>
  );
};