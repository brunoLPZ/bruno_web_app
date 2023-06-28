import ejptv2 from '../assets/ejptv2_badge.png';
import htb from '../assets/htb.png';

function Hacking() {

    return <div className="h-screen relative snap-start text-slate-50 font-['VT323'] flex flex-col items-center gap-4 p-5">
        <div className="flex flex-col items-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl text-center break-words">
                <span className="animate-pulse text-[#00FF00]">Hacking</span> as a hobby
            </h1>
            <svg className="fill-slate-50 w-10 md:w-12 lg:w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M8 2h2v4h4V2h2v4h2v3h2v2h-2v2h4v2h-4v2h2v2h-2v3H6v-3H4v-2h2v-2H2v-2h4v-2H4V9h2V6h2V2Zm8 6H8v3h8V8Zm-5 5H8v7h3v-7Zm2 7h3v-7h-3v7ZM4 9H2V7h2v2Zm0 10v2H2v-2h2Zm16 0h2v2h-2v-2Zm0-10V7h2v2h-2Z"/>
            </svg>
        </div>
        <div className="flex flex-col items-center gap-10">
            <p className="uppercase text-3xl text-center">Love solving puzzles and CTF <svg className="inline fill-[#00FF00] w-6 md:w-8 lg:w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M3 2h10v2h8v14H11v-2H5v6H3V2zm2 12h8v2h6V6h-8V4H5v10z"/>
            </svg> challenges.</p>
            <div className="flex flex-col items-center gap-5">
                <p className="text-xl">HTB walkthroughs comming soon...</p>
                <img className="contrast-200" src={htb} alt="htb logo"/>
            </div>
        </div>
        <div className="absolute left-0 bottom-5 w-full">
            <h4 className="text-center text-xl mb-2">My certifications so far</h4>
            <div className="flex items-center justify-center">
                <div className="w-10 h-10 md:w-24 md:h-24 rounded-full bg-white/20 flex items-center justify-center">
                    <img className="w-8 md:w-20" src={ejptv2} alt="ejptv2 badge"/>
                </div>
            </div>
        </div>
    </div>
}
export default Hacking;