
import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { mockFetch } from "../MockApi/MockFetch";
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom";


export const ItemDetailContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {pid} = useParams();

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
        }, 0);
    }, []);   


    return (
        <div className="prueba">
            {loading ?
                (
                    <h2>Cargando...</h2>
                )
                :
                (
                    
                    <section className="ItemDetailContainer">                        
                        <ItemDetail products={products} pid={pid}/>
                    </section>
                )
            }
        </div>);
};

