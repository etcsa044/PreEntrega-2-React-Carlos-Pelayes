import { Link, NavLink } from "react-router-dom";
import "./NavBar.css"


const Navbar = () => {

    return(
        <nav>
            <ul>
                <li><NavLink className={({isActive})=>isActive? "active":"NavLink"} to="/">Inicio</NavLink></li>
                <li><NavLink className={({isActive})=>isActive? "active":"NavLink"} to="/groundActivities">Actividades Terrestres</NavLink></li>
                <li><NavLink className={({isActive})=>isActive? "active":"NavLink"} to="/airActivities">Actividades Aéreas</NavLink></li>
                <li><NavLink className={({isActive})=>isActive? "active":"NavLink"} to="/">Contacto</NavLink></li>
            </ul>
        </nav>
    )
}




export default Navbar;