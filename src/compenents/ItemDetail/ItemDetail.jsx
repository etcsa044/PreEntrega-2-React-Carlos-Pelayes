import { useParams } from "react-router-dom";
import { ItemCounter } from "../ItemCounter/ItemCounter"
import "./ItemDetail.css"

export const ItemDetail = ({products})=>{

    const productos = products;
    const pid = useParams();    
    const prod = productos.find(e=>e.id == pid.pid);
    

    return (
        <article className="ItemDetail">
            <img src={prod.imgHd} alt="" />

            <div className="ItemDescription">
                <h3>{prod.title}</h3>
                <p>{prod.detail}</p>
                
            </div>
            <ItemCounter />
        </article>
    )

}