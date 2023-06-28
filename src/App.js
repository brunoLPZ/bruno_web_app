import Home from "./pages/Home";
import Cover from "./pages/Cover";
import Experience from "./pages/Experience";
import ExperienceHeading from "./pages/ExperienceHeading";
import Hacking from "./pages/Hacking";
import citius from './assets/citius.svg';
import imatia from './assets/imatia.png';
import ttech from './assets/ttech.svg';
import Contact from "./pages/Contact";

function App() {
    const experiences = [
        {
            year: 2018,
            logo: citius,
            position: 'Senior Research Support Technician',
            explanation: 'Develop <span class="underline text-emerald-600">ExpliClas</span>.\n' +
                '                    This was part of my degree final project.\n' +
                '                    In a few words. This was a Java REST API with a React frontend. The goal was to generate natural\n' +
                '                    language explanations to machine learning algorithms.'
        },
        {
            year: 2019,
            logo: imatia,
            position: 'Fullstack Developer',
            explanation: 'Worked on two big projects here. A ' +
                '<span class="underline text-emerald-600">microservice-oriented architecture</span> and a ' +
                '<span class="underline text-emerald-600">serverless</span> ' +
                'architecture was what I came across. SpringBoot, Angular, Docker, RabbitMQ are just some examples of ' +
                'technologies that I used.'
        },
        {
            year: 2022,
            logo: ttech,
            position: 'Fullstack Developer / Innovation Analyst',
            explanation: 'Provide value to the company by developing innovative solutions in ' +
                '<span class="underline text-emerald-600">cloud</span> and ' +
                '<span class="underline text-emerald-600">cyber-security</span> areas. ' +
                'SpringBoot, Angular and Python as main technology stack. First approaches to solutions involving ' +
                'generative AI algorithms like LLMs.'
        }
    ]
  return (
    <div className="bg-black no-scrollbar h-screen overflow-auto overflow-x-hidden snap-y snap-mandatory">
        <Home></Home>
        <Cover></Cover>
        <ExperienceHeading></ExperienceHeading>
        {experiences.map((exp, idx) => <Experience key={idx} experience={exp}></Experience>)}
        <Hacking></Hacking>
        <Contact></Contact>
    </div>
  );
}

export default App;
