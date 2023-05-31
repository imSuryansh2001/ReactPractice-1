import HeroSection from "../HeroSection"

const About = () =>{

    const data = {
        name:"Suryansh Tomar",
        image:"/images/picOne.jpg"
    }

    return <>
        <HeroSection {...data} /> 
    </>
}

export {About};