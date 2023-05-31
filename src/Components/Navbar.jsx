import { NavLink } from "react-router-dom";

const Navbar = () => {
    return <div className="flex">
        <p className="px-4 font-mono hover:text-gray-700">
            <NavLink to="/">Home</NavLink>
        </p>

        <p className="px-4 font-mono hover:text-gray-700">
            <NavLink to="/about">About</NavLink>
        </p>

        <p className="px-4 font-mono hover:text-gray-700">
            <NavLink to="/services">Services</NavLink>
        </p>

        <p className="px-4 font-mono hover:text-gray-700">
            <NavLink to="/contact">Contact</NavLink>
        </p>
    </div>
}

export { Navbar };