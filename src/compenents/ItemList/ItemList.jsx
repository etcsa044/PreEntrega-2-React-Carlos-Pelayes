
import { useParams } from "react-router-dom";
import { Item } from "../Items/Items";

import "./ItemList.css";


export const ItemList = ({

products

}) => {
    return (

        <section className="category">
            {products.map((e) => {
                return <Item key={e.id} {...e} />;
            })}
        </section>
    )

};


