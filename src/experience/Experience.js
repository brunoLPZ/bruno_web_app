import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/solid';
import { useEffect } from 'react';
import citius from './../assets/citius.svg';
import imatia from './../assets/imatia.png';
import telefonicaTech from './../assets/telefonica_tech.svg';
import './Experience.css';

const EXPERIENCE = [
  {
    id: 'exp1',
    year: 'Sep 2018',
    logo: citius,
    project: 'ExpliClas',
    position: 'Técnico Superior de Apoyo a la Investigación',
    technologies: ['rest', 'java', 'react', 'jersey', 'nlg'],
    anchors: [
      {
        direction: 'DOWN',
        value: '#exp2',
      },
    ],
  },
  {
    id: 'exp2',
    year: 'Jan 2019',
    logo: imatia,
    project: 'Cinfoni',
    position: 'Fullstack Developer',
    technologies: [
      'java',
      'sprinboot',
      'angular',
      'docker',
      'kubernetes',
      'rabbitmq',
      'postgresql',
    ],
    anchors: [
      {
        direction: 'UP',
        value: '#exp1',
      },
      {
        direction: 'DOWN',
        value: '#exp3',
      },
    ],
  },
  {
    id: 'exp3',
    year: 'Jul 2021',
    logo: imatia,
    project: 'Bertelsmanm Collaboration Platform (BCP)',
    position: 'Fullstack Developer',
    technologies: ['azure', 'typescript', 'nodejs', 'angular', 'mongodb'],
    anchors: [
      {
        direction: 'UP',
        value: '#exp2',
      },
      {
        direction: 'DOWN',
        value: '#exp4',
      },
    ],
  },
  {
    id: 'exp4',
    year: 'Jul 2022',
    logo: telefonicaTech,
    project: 'Cloud & Cyber innovation projects',
    position: 'Fullstack Developer / Innovation Analyst',
    technologies: [
      'springboot',
      'python',
      'celery',
      'angular',
      'mongodb',
      'rabbitmq',
      'elasticsearch',
    ],
    anchors: [
      {
        direction: 'UP',
        value: '#exp3',
      },
      {
        direction: 'DOWN',
        value: '#contact',
      },
    ],
  },
];
export function Experience() {
  useEffect(() => {
    window.addEventListener('scroll', reveal);
  });

  const reveal = () => {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        console.log(reveals[i]);
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  };

  return (
    <div id="experience" className="flex flex-col text-slate-200">
      {EXPERIENCE.map((exp, i) => {
        return (
          <div
            id={exp.id}
            key={exp.id}
            className="h-screen reveal"
            style={{ minHeight: '500px' }}
          >
            <div className="flex h-5/6 divide-x-2">
              <div className="w-1/2 flex flex-col justify-center items-center px-4 gap-5">
                <div className="text-3xl md:text-7xl font-thin">{exp.year}</div>
                <img
                  className="w-15 md:w-72"
                  src={exp.logo}
                  alt="citius logo"
                ></img>
              </div>
              <div className="w-1/2 flex flex-col justify-center items-center px-4 gap-5">
                <div className="w-full px-5">
                  <div className="text-base md:text-3xl">Project</div>
                  <div className="text-sm md:text-3xl font-thin mt-2">
                    {exp.project}
                  </div>
                </div>
                <div className="w-full px-5">
                  <div className="text-base md:text-3xl">Position</div>
                  <div className="text-sm md:text-3xl font-thin mt-2">
                    {exp.position}
                  </div>
                </div>
                <div className="w-full px-5">
                  <div className="text-base md:text-3xl">Technologies</div>
                  <div className="flex flex-wrap gap-2 text-xs md:text-xl font-mono mt-2">
                    {exp.technologies.map((tech, i) => {
                      return (
                        <div
                          key={`${tech}-${i}`}
                          className="bg-sky-100 text-slate-800 rounded-md px-1"
                        >
                          {tech}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center h-1/6 gap-10">
              {exp.anchors.map((a, i) => {
                return (
                  <a key={i} className="flex items-center" href={a.value}>
                    {a.direction === 'DOWN' ? (
                      <ArrowDownIcon className="w-6 h-6 md:w-10 md:h-10 animate-[bounce_1.5s_ease-in-out_infinite]"></ArrowDownIcon>
                    ) : (
                      <ArrowUpIcon className="w-6 h-6 md:w-10 md:h-10 animate-[bounce_2s_ease-in-out_infinite]"></ArrowUpIcon>
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
