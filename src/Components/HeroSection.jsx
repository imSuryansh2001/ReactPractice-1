const HeroSection = ({ name, image }) => {
    return (
        <div className="flex w-[90%] mt-16 m-auto justify-evenly items-center">
            <div className="w-[30%]" >
                <p className="font-Poppins">THIS IS ME</p>
                <h1 className="text-5xl font-Rowdies mt-4 font-bold">{name}</h1>
                <p className="mt-2 text-gray-700 font-Poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro alias dolores voluptatibus obcaecati animi sapiente a aspernatur eveniet sequi officiis cumque, suscipit optio voluptatem quis commodi vitae rerum modi nulla?</p>
                <button className="bg-[#D268CC] hover:shadow-black hover:shadow-md duration-500 font-semibold px-4 py-2 mt-4 rounded-sm  text-white" >See More</button>
            </div>
            <img className="w-[30%]" src={image} alt=""/>
        </div>
    );
}

export default HeroSection;
