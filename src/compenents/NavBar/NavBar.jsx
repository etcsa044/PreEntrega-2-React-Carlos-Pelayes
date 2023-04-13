import { NavLink } from "react-router-dom";
import "./NavBar.css"
import { mockFetch } from "../MockApi/MockFetch";
import { useEffect, useState } from "react";


const Navbar = () => {

    // const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(true);


    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const data = await mockFetch();
    //             setProducts(data);
    //             setLoading(false);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     setTimeout(() => {
    //         fetchData();
    //     },2000);
    // }, []);

    // const verificacion = products.map(e => e.category )

    // const air = products;
    // const ground = products.map(e => e.category)
    
    return(
        <nav>
            <ul>
                <li><NavLink className={({isActive})=>isActive? "active":"NavLink"} to="/">Inicio</NavLink></li>
                <li><NavLink className={({isActive})=>isActive? "active":"NavLink"} to={`/category/groundActivity`}>Actividades Terrestres</NavLink></li>
                <li><NavLink className={({isActive})=>isActive? "active":"NavLink"} to={`/category/airActivity`}>Actividades Aéreas</NavLink></li>
                <li><NavLink className={({isActive})=>isActive? "active":"NavLink"} to="/">Contacto</NavLink></li>
            </ul>
        </nav>
    )
}




export default Navbar;