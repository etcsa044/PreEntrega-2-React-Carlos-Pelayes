
import { Link } from "react-router-dom";
import { useCartContext } from "../../CartContext/CartContext";
import "./Cart.css"
export const Cart = () => {


  const { cartList, removeProduct, cleanCart } = useCartContext()

  let total = 0

  cartList.map(e => {
    total = total + e.producto.product.price * e.quantity

  })

  const handleRemove = (e)=>{
    removeProduct(e);
  }

  const handleClean = (e)=>{
    cleanCart();
  }


  return (
    <div className="contenedorCart">
      {cartList.length == 0 ?
      <h2>Tu Carrito está vacio:</h2>
      
      :
      <h2>Tu Carrito actual contiene:</h2>}
      
      <div>
        {cartList.map((product) => {
          let subTot = 0
          subTot = subTot + product.producto.product.price * product.quantity
          return (
            <div key={product.producto.product.id}>
              <div className="cartList" >
                <p>{product.producto.product.title}</p>
                <p>{`cantidad ${product.quantity}`}</p>
                <p>{`precio unidad: $${product.producto.product.price}`}</p>
                <p id="subTotal">{`Sub Total:   $${subTot}`} <span className="span" onClick={() => handleRemove(product.producto.id)}>X</span></p>
              </div>
            </div>
          );
        })}
        <h2>{`Total de tu pedido $ ${total}`}</h2>
        <Link >
          <button>Finalizar Compra</button>
        </Link>
        <button onClick={()=>{handleClean()}}>Vaciar Carrito</button>
      </div>
    </div>
  );
};