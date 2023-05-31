
import { RiSendPlaneFill } from "react-icons/ri"
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import CopyRight from "./CopyRight";

const Footer = () => {
    return <>

        {/* footer main div */}
        <div className="w-[100%] mt-20 bg-pink-100 rounded-md flex justify-around m-auto">
            {/* one */}
            <div className="w-[20%] pb-6 " >
                <h1 className="font-semibold text-3xl mt-12 " >Suryansh Tomar</h1>
                <p className="mt-2 font-Poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad earum iure voluptatibus totam.</p>
            </div>

            {/* two */}
            <div className="w-[20%] pb-6 " >
                <h1 className="font-semibold text-3xl mt-12">Get latest updates</h1>
                {/* div for input and send button */}
                <div className="flex mt-4 items-center">
                    <input className="outline-none w-[87%] placeholder:text-sm border-[1px] border-black" type="email" placeholder="email" />
                    <RiSendPlaneFill className="border-[1px] cursor-pointer p-1 text-[1.6rem] bg-black text-pink-200 border-black" />
                </div>
            </div>

            {/* three */}
            <div className="w-[20%] pb-6 " >
                <h1 className="font-semibold text-3xl mt-12">Follow On</h1>
                {/* div for social icons */}
                <div className="flex mt-4 items-center">
                    <a href="https://www.instagram.com/suryansh__2001/" target="_blank" rel="noreferrer"><AiFillInstagram className="mx-0 cursor-pointer hover:text-[#D268CC] text-2xl" /></a>
                    <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"><AiFillLinkedin className="ml-3 cursor-pointer hover:text-[#D268CC] text-2xl" /></a>
                    <a href="https://github.com/" target="_blank" rel="noreferrer"><AiFillGithub className="ml-3 cursor-pointer hover:text-[#D268CC] text-2xl" /></a>
                </div>
            </div>

        </div>

        <CopyRight/>
    </>
}

export { Footer };