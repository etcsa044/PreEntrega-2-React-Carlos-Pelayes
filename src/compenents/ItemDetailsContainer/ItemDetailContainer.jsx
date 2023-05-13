
import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { mockFetch } from "../MockApi/MockFetch";
import { useParams } from "react-router-dom";
import {doc, getDoc, getFirestore} from "firebase/firestore";
import "./ItemDetailContainer.css"
import { initFireBase } from "../../firebase/config";


export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const {pid} = useParams();  

    useEffect(()=>{
        const db = getFirestore();
        const queryDoc = doc(db, "productos", pid);
        async function traerProd (req, resp) {
            try {
              const resp = await getDoc(queryDoc);
              setProduct({id:resp.id , ...resp.data()});
              setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        traerProd();
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
                        <ItemDetail product={{product}}/>
                    </section>
                )
            }
        </div>);
};

