import { NavLink } from "react-router-dom"
import Data from "../Data.json"
import "./Services.css"

const Services = () => {
    return <>
        <h1 className="text-center text-5xl mt-16 font-Rowdies">Our Services</h1>

        {/* main div */}
        <div className="w-[90%] flex-wrap flex justify-evenly items-center mt-12 m-auto">

            {
                Data.map((currentElement,id) => {
                    const {txt,img} = currentElement
                    return <>
                        <div key={id} id="imgDiv" className="w-[20%] hover:bg-[#ffe6fe] p-2 mx-10 mt-8 border-[1px] rounded-lg border-black">
                            <img id="servicesImg" className="rounded-md" src={img} alt={img} />
                            <p className="mt-4 text-center text-gray-700  font-Poppins">{txt}</p>
                            <center>
                                <NavLink to="/" ><button className="bg-[#D268CC] mt-4 mb-4 font-semibold px-4 py-2 rounded-sm  text-white" >See More</button></NavLink>
                            </center>
                        </div>
                    </>
                })
            }
        </div>

    </>
}

export { Services };