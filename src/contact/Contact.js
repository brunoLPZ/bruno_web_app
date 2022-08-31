import linkedin from './../assets/linkedin.png';
import gmail from './../assets/gmail.svg';

export function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center gap-10 p-2 text-slate-200 h-screen"
      style={{ minHeight: '500px' }}
    >
      <h1 className="text-2xl md:text-7xl">Contact</h1>
      <div className="flex gap-5">
        <a
          href="https://www.linkedin.com/in/brunolopeztrigo/"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 hover:animate-pulse"
        >
          Linkedin
          <img src={linkedin} alt="linkedin logo" className="w-12 h-12"></img>
        </a>
        <a
          href="mailto:bruno.lopez.trigo@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 hover:animate-pulse"
        >
          Gmail
          <img src={gmail} alt="gmail logo" className="w-12 h-12"></img>
        </a>
      </div>
    </div>
  );
}
