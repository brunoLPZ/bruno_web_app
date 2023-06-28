function Experience(props) {
    if (props.experience) {
        return <div className="h-screen relative snap-start px-10 py-10 font-['VT323'] flex flex-col bg-slate-50 text-black">
            <h1 className="text-4xl md:text-5xl lg:text-6xl flex gap-4 items-center">
                <svg className="fill-black w-8 md:w-10 lg:w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M15 2h2v2h4v18H3V4h4V2h2v2h6V2zM9 6H5v2h14V6H9zm-4 4v10h14V10H5zm2 2h2v2H7v-2zm6 0h-2v2h2v-2zm2 0h2v2h-2v-2zm-6 4H7v2h2v-2zm2 0h2v2h-2v-2zm6 0h-2v2h2v-2z"/>
                </svg>
                {props.experience.year}
            </h1>
            <div className="flex flex-col gap-10 pt-10 items-center m-auto max-w-3xl">
                <img src={props.experience.logo} alt="company logo" className="w-32 lg:w-64 brightness-0"></img>
                <div className="text-center">
                    <p className="text-3xl lg:text-5xl">Position</p>
                    <p className="lg:text-xl font-['Source Code Pro'] font-mono">
                        {props.experience.position}
                    </p>
                </div>
                <div className="text-center">
                    <p className="text-3xl lg:text-5xl">What I did?</p>
                    <p className="lg:text-xl font-['Source Code Pro'] font-mono" dangerouslySetInnerHTML={{ __html: props.experience.explanation }}>
                    </p>
                </div>
            </div>
        </div>
    }
    return <div></div>
}

export default Experience;