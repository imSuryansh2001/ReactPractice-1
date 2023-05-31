const Contact = () => {
    return <>
        <h1 className="text-center text-5xl mt-16 font-Rowdies">Feel Free To Contact</h1>

        {/* Map */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55459.05755929925!2d76.94723226630579!3d29.6852388269415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e701851e03e97%3A0xf84aa8b9e1cc7607!2sKarnal%2C%20Haryana!5e0!3m2!1sen!2sin!4v1685381966533!5m2!1sen!2sin" width="90%" height="450" style={{ border: 0, margin: "auto", borderRadius: "1rem", marginTop: "2rem" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        </iframe>

        {/*contact form */}
        <form className="flex flex-col items-center w-[100%] mt-10 m-auto" action="https://formspree.io/f/moqzzble" method="POST">
            <input className="border-[1px] outline-none w-[50%] h-[5vh] mt-3 placeholder:text-sm placeholder:font-Poppins text-center border-black rounded-lg" type="text" placeholder="USERNAME" name="Username" autoComplete="off" required/>

            <input className="border-[1px] outline-none w-[50%] h-[5vh] mt-3 placeholder:text-sm placeholder:font-Poppins text-center border-black rounded-lg" type="email" placeholder="EMAIL" name="Email" autoComplete="off" required/>

            <textarea className="border-[1px] outline-none w-[50%]  text-center rounded-lg mt-3 placeholder:font-Poppins border-black" rows="10" placeholder="WRITE YOUR MESSAGE..." name="Message" required>
            </textarea>

            <button type="submit" className="bg-[#D268CC] mt-4 mb-4 font-semibold px-4 py-2 rounded-sm  text-white" >Send</button>
        </form>
    </>
}

export { Contact };