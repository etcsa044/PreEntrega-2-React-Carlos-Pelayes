import { useState, useEffect } from "react";
import { mockFetch } from "../MockApi/MockFetch";
import { ItemList } from "../ItemList/ItemList"
import "./ItemListContainer.css"

const ItemListContainer = () => {


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
        },2000);
    }, []);




    return (
        <div>
            {loading ?
                (
                    <h2>Cargando...</h2>
                )
                :
                (
                    <div className="ItemlistContainer">
                        <ItemList products={products}/>
                    </div>
                )
            }
        </div>);




    
}


export default ItemListContainer