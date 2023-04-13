import { NavLink } from "react-router-dom";
import "./NavBar.css"


const Navbar = () => {
    
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