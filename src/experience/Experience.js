import './Experience.css';
import citiusImg from '../assets/citius.svg';
import imatiaImg from '../assets/imatia.png';
import telefonicaImg from '../assets/telefonica_tech.svg';

const EXPERIENCE = [
  {
    year: 'Sep 2018',
    logo: citiusImg,
    project: 'ExpliClas',
    position: 'Técnico Superior de Apoyo a la Investigación',
    technologies: ['rest', 'java', 'react', 'jersey', 'nlg'],
  },
  {
    year: 'Jan 2019',
    logo: imatiaImg,
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
  },
  {
    year: 'Jul 2021',
    logo: imatiaImg,
    project: 'Bertelsmanm Collaboration Platform (BCP)',
    position: 'Fullstack Developer',
    technologies: ['azure', 'typescript', 'nodejs', 'angular', 'mongodb'],
  },
  {
    year: 'Jul 2022',
    logo: telefonicaImg,
    project: 'Cloud & Cyber innovation projects',
    position: 'Fullstack Developer / Innovation Analyst',
    technologies: [
      'springboot',
      'python',
      'celery',
      'pandas',
      'angular',
      'mongodb',
      'rabbitmq',
      'elasticsearch',
      'cibersecurity',
    ],
  },
];

function Experience(props) {
  const { parallaxPercentage, theme } = props;

  return (
    <div className="experience-container">
      <h1
        className="text-title-xl"
        style={{
          position: 'relative',
          top: Math.sin(-1 + Math.min(1, parallaxPercentage)) * 1000,
          opacity: Math.min(1, parallaxPercentage),
        }}
      >
        Experience
      </h1>
      <div className="experience-list">
        {EXPERIENCE.map((experience) => (
          <div
            className={`experience-item ${theme}`}
            style={{ opacity: Math.min(1, parallaxPercentage) }}
          >
            <div
              className="experience-block"
              style={{
                position: 'relative',
                left:
                  Math.sin(-1 + Math.pow(Math.min(1, parallaxPercentage), 2)) *
                  1000,
              }}
            >
              <h2 className="text-normal" style={{ fontSize: '2.5rem' }}>
                {experience.year}
              </h2>
              <div className="text-normal text-upper">Working at</div>
              <img src={experience.logo} width={150}></img>
            </div>
            <div
              className="experience-block"
              style={{
                position: 'relative',
                right:
                  Math.sin(-1 + Math.pow(Math.min(1, parallaxPercentage), 2)) *
                  1000,
              }}
            >
              <h2 className="text-normal text-upper">Project</h2>
              <div>{experience.project}</div>
              <h2 className="text-normal text-upper">Position</h2>
              <div>{experience.position}</div>
              <h2 className="text-normal text-upper">Technologies | Topics</h2>
              <div className="experience-technology-list">
                {experience.technologies.map((technology) => (
                  <div className={`experience-technology ${theme}`}>
                    {technology}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
