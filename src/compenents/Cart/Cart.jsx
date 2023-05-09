
import { Link } from "react-router-dom";
import { useCartContext } from "../../CartContext/CartContext";
import "./Cart.css"
export const Cart = () => {


  const { cartList, removeProduct, cleanCart } = useCartContext()

  let subTotal = 0
  let total = 0

  cartList.map(e => {
    total = total + e.producto.price * e.quantity

  })

  const handleRemove = (e)=>{
    removeProduct(e);
  }

  const handleClean = (e)=>{
    cleanCart();
  }


  return (
    <div className="contenedorCart">
      <h1> Tu Carrito actual contiene: </h1>
      <div>
        {cartList.map((product) => {
          let subTot = 0
          subTot = subTot + product.producto.price * product.quantity
          return (
            <div key={product.producto.id}>
              <div className="cartList" >
                <p>{product.producto.title}</p>
                <p>{`cantidad ${product.quantity}`}</p>
                <p>{`precio unidad: $${product.producto.price}`}</p>
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