import "./Header.css"
import Logo from "../Logo/Logo.jsx"
import Navbar from "../NavBar/NavBar";
import CartWidget from "../CartWidget/CartWidget";

const Header = () => {
    return(
        <header>
            <Logo />
            <Navbar />
            <CartWidget />
        </header>
    )
}

export default Header;