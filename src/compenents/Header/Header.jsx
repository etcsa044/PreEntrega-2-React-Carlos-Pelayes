import "./Header.css"
import Logo from "../Logo/Logo.jsx"
import Navbar from "../NavBar/NavBar";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link className="header-Link" to="/">
                <Logo />
            </Link>

            <Navbar />

            <Link className="header-Link" to="/cart">
                <CartWidget />
            </Link>
        </header>
    )
}

export default Header;