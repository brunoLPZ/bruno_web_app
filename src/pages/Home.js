import {TypeAnimation} from "react-type-animation";
import me from '../assets/me.png';
import me2 from '../assets/me2.jpeg';
import {useState} from "react";

function Home() {

    const [pixelProfile, setPixelProfile] = useState(true);

    return <div className="h-screen relative snap-start flex flex-col gap-20 items-center justify-center bg-black">
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Welcome',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Nice to meet you!',
                1000,
                "I'm Bruno",
                1000
            ]}
            className="font-['VT323'] text-slate-50 text-center text-7xl lg:text-9xl font-extralight"
            wrapper="h1"
            speed={1}
            repeat={0}
        />
        <div className="relative w-64 h-64" onMouseEnter={() => setPixelProfile(false)}
             onMouseLeave={() => setPixelProfile(true)}>
            <img src={me} alt="profile picture" className={'absolute top-0 transition-all duration-1000 rounded-full ' + (pixelProfile ? 'opacity-100' : 'opacity-0')}/>
            <img src={me2} alt="profile picture" className={'absolute top-0 transition-all duration-1000 rounded-full ' + (!pixelProfile ? 'opacity-100' : 'opacity-0')}/>
        </div>
        <svg className="fill-slate-50 h-32 animate-bounce" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M11 4h2v12h2v2h-2v2h-2v-2H9v-2h2V4zM7 14v2h2v-2H7zm0 0v-2H5v2h2zm10 0v2h-2v-2h2zm0 0v-2h2v2h-2z" />
        </svg>
    </div>
}

export default Home;