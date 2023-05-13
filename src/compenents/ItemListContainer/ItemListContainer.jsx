import { useState, useEffect } from "react";
import { mockFetch } from "../MockApi/MockFetch";
import { ItemList } from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {


    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { pcat } = useParams()

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const data = await mockFetch();
    //             if(!pcat){
    //                 setProducts(data);
    //             }else{
    //                 setProducts(data.filter(e => e.category === pcat))
    //             }                
    //             setLoading(false);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     setTimeout(() => {
    //         fetchData();
    //     },10);
    // }, [pcat]);

    // useEffect(() => {
    //     const db = getFirestore();
    //     const queryCollection = collection(db, "productos");
    //     async function getCollection(req, resp) {
    //         try {
    //             const resp = await getDocs(queryCollection);
    //             if (!pcat) {
    //                 setProducts(resp.docs.map(e => ({ id: e.id, ...e.data() })));
    //                 console.log(products)
    //             } else {              
    //                 setProducts(resp.docs.filter(e => e.data().category === pcat));
    //                 console.log("aqui", products)
    //             }
    //             setLoading(false);
                
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     getCollection();
    // }, [pcat]);

    useEffect(() => {
        const db = getFirestore();
        const queryCollection = collection(db, "productos");
      
        async function getCollection() {
          try {
            const resp = await getDocs(queryCollection);
            let productsData;
      
            if (!pcat) {
              productsData = resp.docs.map(e => ({ id: e.id, ...e.data() }));
            } else {
              productsData = resp.docs
                .filter(e => e.data().category === pcat)
                .map(e => ({ id: e.id, ...e.data() }));
            }
      
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
                        <ItemList products={{products}} />
                    </div>
                )
            }
        </div>);





}


export default ItemListContainer