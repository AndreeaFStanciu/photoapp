import "./NavBar.css";
import logo from "./photobooth2.jpg";


function NavBar() {
    return (

        <menu className="menu">
            <a href="/" className="logo">
                <img src={logo} alt="Logoepb" height={60} width={80} />
            </a>
            <a href="/">Home</a>
            <a href="/authentication">Authentication</a>
            <a href="/aboutus">AboutUs</a>
            <a href="/contact">Contact</a>

        </menu>
    )
};


export default NavBar;