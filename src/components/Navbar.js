import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    );
}

export default Navbar;
