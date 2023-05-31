import { NavLink } from "react-router-dom"

const Error = () => {
  return (
    <center>
        <img className="w-[40%] mt-12" src="/images/Error.svg" alt="/images/Error.svg" />
       <NavLink to="/">
            <button type="submit" className="bg-[#D268CC] mt-4 mb-4 font-semibold px-4 py-2 rounded-sm  text-white" >Go Back</button>
       </NavLink>
    </center>
  );
}

export {Error}
