import { Contact } from '../contact/Contact';
import { Cover } from '../cover/Cover';
import { Experience } from '../experience/Experience';

export function Home() {
  return (
    <div>
      <Cover></Cover>
      <Experience></Experience>
      <Contact></Contact>
    </div>
  );
}
