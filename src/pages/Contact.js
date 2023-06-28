import linkedin from '../assets/linkedin.png';
function Contact() {
    return <div className="h-screen relative snap-start text-slate-50 flex flex-col justify-center">
        <div className="flex flex-col gap-10 items-center">
            <h1 className="font-['VT323'] text-5xl md:text-7xl lg:text-9xl text-center">Contact me</h1>
            <a href="https://es.linkedin.com/in/brunolopeztrigo">
                <img className="shine-effect w-28 h-28 md:w-32 md:h-32 lg:w-40 lg:h-40" src={linkedin} alt="linkedin logo"/>
            </a>
        </div>
        <div className="flex slider absolute bottom-0">
            {Array.from(Array(50).keys()).map((i) => {
                return <h1 key={i} className="mr-20 font-['Press_Start_2P'] md:text-3xl lg:text-5xl">bruno.lopez.trigo@gmail.com</h1>
            })}
        </div>
    </div>
}

export default Contact;