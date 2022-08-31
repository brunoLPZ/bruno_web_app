import TextScramble from '@twistezo/react-text-scramble';
import { Avatar } from './../assets/Avatar';
import './Cover.css';

const TITLE = 'Bruno L.T';
const SUBTITLE = 'Fullstack Developer';

export function Cover() {
  return (
    <div
      className="flex flex-col items-center justify-between p-2 text-slate-200 h-screen"
      style={{ minHeight: '500px' }}
    >
      <div className="flex flex-col items-center justify-center mt-5 h-full">
        <Avatar></Avatar>
        <h1 className="font-thin mt-2 text-5xl">
          <TextScramble
            texts={[TITLE]}
            letterSpeed={10}
            nextLetterSpeed={100}
          />
        </h1>
        <h2 className="font-thin mt-4 text-3xl tracking-widest">
          <TextScramble
            texts={[SUBTITLE]}
            letterSpeed={5}
            nextLetterSpeed={50}
          />
        </h2>
      </div>
      <div className="flex justify-between self-end w-full px-4 py-4">
        <a
          href="#experience"
          className="uppercase text-xl font-light transition ease-in-out duration-300 px-2 hover:scale-110 hover:bg-sky-100 hover:text-slate-800"
        >
          experience
        </a>
        <a
          href="#contact"
          className="uppercase text-xl font-light transition ease-in-out duration-300 px-2 hover:scale-110 hover:bg-sky-100 hover:text-slate-800"
        >
          contact
        </a>
      </div>
    </div>
  );
}
