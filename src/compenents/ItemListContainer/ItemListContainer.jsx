import { useState, useEffect } from "react";
import { mockFetch } from "../MockApi/MockFetch";
import { ItemList } from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = () => {


    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { pcat } = useParams()

      useEffect(() => {
        const db = getFirestore();
        const collectionRef = collection(db, "productos");
        let queryCollection;
    
        if (!pcat) {
          queryCollection = collectionRef;
        } else {
          queryCollection = query(collectionRef, where("category", "==", pcat));
        }
    
        async function getCollection() {
          try {
            const snapshot = await getDocs(queryCollection);
            const productsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            console.log("prod data", productsData);
            setProducts(productsData);
            setLoading(false);
          } catch (error) {
            console.log(error);
          }
        }
    
        getCollection();
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
                        <ItemList products={products} />
                    </div>
                )
            }
        </div>);





}


export default ItemListContainer