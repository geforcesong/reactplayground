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
            <li><Link to="/contexthook">Context Hook Testing</Link></li>
            <li><Link to="/parentchild">Parent Child</Link></li>
            <li><Link to="/redux-test">Redux Test</Link></li>
        </ul>
    );
}

export default Navbar;
