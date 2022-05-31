import './Explore.css';
import { TimelineItem } from './timeline-item/TimelineItem';
import citius from './citius.png';
import imatia from './imatia.png';

export function Explore() {
  return (
    <div className='Explore'>
      <TimelineItem
        year='Sep 2018'
        yearPosition='left'
        project='ExpliClas'
        position='Técnico Superior de Apoyo a la Investigación'
        technologies={['rest', 'java', 'react', 'jersey', 'nlg']}
        picture={citius}
      ></TimelineItem>
      <TimelineItem
        year='Ene 2019'
        yearPosition='right'
        project='Cinfoni'
        position='FullStack Developer'
        technologies={[
          'microservices',
          'rest',
          'java',
          'springboot',
          'angular',
          'docker',
          'kubernetes',
          'rabbitmq',
        ]}
        picture={imatia}
      ></TimelineItem>
      <TimelineItem
        year='Jul 2021'
        yearPosition='left'
        project='Bertelsmann Collaboration Platform (BCP)'
        position='FullStack Developer'
        technologies={['cloud', 'azure', 'typescript', 'nodejs', 'angular']}
        picture={imatia}
      ></TimelineItem>
    </div>
  );
}
