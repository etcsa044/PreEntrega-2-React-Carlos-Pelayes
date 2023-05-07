import { useState, useEffect } from "react";
import { mockFetch } from "../MockApi/MockFetch";
import { ItemList } from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useParams } from "react-router-dom";

const ItemListContainer = () => {


    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const {pcat} = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await mockFetch();
                if(!pcat){
                    setProducts(data);
                }else{
                    setProducts(data.filter(e => e.category === pcat))
                }                
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        setTimeout(() => {
            fetchData();
        },10);
    }, [pcat]);




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