import { Link } from "react-router-dom";
import "./NavBar.css"


const Navbar = () => {

    return(
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><a href="">Actividades</a></li>
                <li><a href="">Medios de pago</a></li>
                <li><a href="">Contactanos</a></li>
            </ul>
        </nav>
    )
}




export default Navbar;