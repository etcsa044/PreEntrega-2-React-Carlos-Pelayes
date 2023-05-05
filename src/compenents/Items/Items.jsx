
import { Link } from "react-router-dom"
import { ItemCounter } from "../ItemCounter/ItemCounter"
import "./Items.css"



export const Item = ({
    img = "/img/kayak200x135.jpg",
    title = "genérico",
    description = "Dolor amet iste eum rem nisi? Odit a dolorem blanditiis sint, ratione molestiae adipisci asperiores eum voluptatibus accusamus consectetur vitae! Esse, sed!",
    price = "$" + 1500,
    stock = 5,
    initial = 1,
    id=1
}) => {

    return (

        <div className="aCard">
            <Link className="Link" to={`/detail/${id}`}>
                <img src={img} alt="Foto Kayak" />
            </Link>
            <div className="aCard-texts">
                <h3>{title}</h3>
                <p>{description}</p>
                <h3>$ {price}</h3>
            </div>
            {/* <ItemCounter stock={stock} initial={initial} /> */}
            <Link className="Link" to={`/detail/${id}`}>
                <button>Ver más...</button>
            </Link>
        </div>

    )



}