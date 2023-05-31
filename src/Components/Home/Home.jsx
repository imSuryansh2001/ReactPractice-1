import HeroSection from "../HeroSection";

const Home = () =>{

    const data = {
        name:"Fullstack Developer",
        image:"/images/PicTwo.svg"
    }

    return <>
        <HeroSection {...data} />
    </>
}

export {Home};