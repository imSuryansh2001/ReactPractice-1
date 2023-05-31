import { RxDoubleArrowUp } from "react-icons/rx"
import "./GoToTop.css"

const GoToTop = () => {

    // function for top button
    const topButton = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <>
            <button id="tb" className="ml-[95%] z-10 absolute mt-[10rem] text-2xl" onClick={topButton} > <RxDoubleArrowUp /> </button>
        </>
    );
}

export default GoToTop;
