function Cover() {
    return (
        <div className="h-screen relative snap-start">
            <div className="group/develop transition-all bg-slate-50 flex-grow h-full pt-16 pl-3
                md:pt-12 md:pl-5 lg:pt-10 lg:pl-10
                hover:rounded-3xl hover:scale-95">
                <h1 className="font-['Press_Start_2P'] font-light max-w-[9ch] transition-all text-black text-4xl md:text-6xl lg:text-7xl">
                    FullStack Dev
                </h1>
                <h2 className="font-['VT323'] uppercase font-extralight duration-500 transition-all opacity-0 group-hover/develop:opacity-100 mt-10 text-black text-4xl lg:text-5xl xl:text-6xl flex flex-wrap gap-4 items-center">
                    I like building...
                </h2>
            </div>
            <div className="group/hacking">
                <div className="transition-all absolute top-0 left-1/2 w-[3000px]
                bg-black flex-grow h-full -skew-x-[45deg]">
                </div>
                <h1 className="font-['Press_Start_2P'] font-light transition-all absolute text-slate-50 text-4xl
                md:text-6xl lg:text-7xl bottom-16 right-3 md:bottom-12 md:right-5
                lg:bottom-10 lg:right-10">Hacking</h1>
                <h2 className="font-['VT323'] uppercase font-extralight absolute bottom-48 right-3 md:right-5 lg:right-10
                    duration-500 transition-all opacity-0 group-hover/hacking:opacity-100
                    text-slate-50 text-4xl lg:text-5xl xl:text-6xl flex gap-5 items-end">
                    ... and breaking
                </h2>
            </div>
        </div>
    );
}
export default Cover;