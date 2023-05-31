import { NavLink } from "react-router-dom";
import { Navbar } from "./Navbar";
import "./Header.css"

const Header = () => {
    return <div className="flex bg-[#ffe6fe] rounded-full justify-between w-[90%] mt-2 m-auto items-center">
        <NavLink to ="/">
            <img className="h-[4rem]" src="/images/reactLogo.png" alt="images/reactLogo.png" id="rotate" />
       </NavLink>

        <Navbar/>
    </div>
}

export {Header};