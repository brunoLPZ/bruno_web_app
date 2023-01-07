import { Contact } from '../contact/Contact';
import { Cover } from '../cover/Cover';
import { Experience } from '../experience/Experience';
import {Certifications} from "../certifications/Certifications";

export function Home() {
  return (
    <div>
      <Cover></Cover>
      <Experience></Experience>
      <Certifications></Certifications>
      <Contact></Contact>
    </div>
  );
}
