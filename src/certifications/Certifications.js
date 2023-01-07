import ejptv2 from '../assets/ejptv2_badge.png';

export function Certifications() {
    return (
        <div
            id="certifications"
            className="flex flex-col items-center gap-10 p-2 text-slate-200 h-screen"
            style={{ minHeight: '500px' }}
        >
            <h1 className="text-2xl md:text-7xl">Certifications</h1>
            <h2 className="text-2xl md:text-5xl font-thin">Jan 2023</h2>
            <div
               className="flex items-center w-10/12 md:w-3/4 justify-between"
               target="_blank"
               rel="noreferrer">
                <img src={ejptv2} alt="ejptv2 logo" className="h-20 md:h-32"/>
                <a href="https://my.ine.com/certificate/f4b1c66c-4bf7-4f47-a9bb-a653a3ce48f3"
                   className="flex items-center text-xl md:text-2xl font-thin px-2 h-full">eJPTv2</a>
            </div>
            <hr className="w-10/12 md:w-3/4"/>
        </div>
    );
}