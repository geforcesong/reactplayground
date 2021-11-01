import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <ul className="nav">
            <li><Link to="/">Home</Link></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/license">License</Link></li>
            <li><Link to="/theme">Themed Component</Link></li>
            <li><Link to="/countries">Country Demo</Link></li>
        </ul>
    );
}

export default Navbar;
