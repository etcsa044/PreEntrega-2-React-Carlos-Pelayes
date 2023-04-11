
import { useParams } from "react-router-dom";
import { Item } from "../Items/Items";

import "./ItemList.css";


export const ItemList = ({

products

}) => {

    const pcat = useParams()

    console.log("aqui" + pcat);

    const airActivities = products.filter(e => e.category == "airActivity");
    console.log(airActivities)
    return (

        <section className="category">
            {products.map((e) => {
                return <Item key={e.id} {...e} />;
            })}
        </section>
    )

};


