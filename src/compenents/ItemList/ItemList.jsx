import { useState, useEffect } from "react";
import { Item } from "../Items/Items";
import { mockFetch } from "../MockApi/MockFetch";
import "./ItemList.css";


export const ItemList = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await mockFetch();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        setTimeout(() => {
            fetchData();
        }, );
    }, []);

    return (
        <div>
            {loading ?
                (
                    <h2>Cargando...</h2>)
                :
                (
                    <section className="category">
                        {products.map((e) => {
                            return <Item key={e.id} {...e} />;
                        })}
                    </section>)}
        </div>);
};


