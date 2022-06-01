import { useEffect } from 'react';
import './TimelineItem.css';

export function TimelineItem(props) {
  const handleScroll = (event) => {
    var items = document.getElementsByClassName('Explore-Timeline');
    for (let i = 0; i < items.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = items[i].getBoundingClientRect().top;
      const elementVisible = 200;
      if (elementTop < windowHeight - elementVisible) {
        items[i].classList.add('Explore-Active');
        items[i]
          .querySelector('.Timeline-Column-Left')
          .classList.add('Timeline-Column-Reveal-Left');
        items[i]
          .querySelector('.Timeline-Column-Right')
          .classList.add('Timeline-Column-Reveal-Right');
      } else {
        items[i].classList.remove('Explore-Active');
        items[i]
          .querySelector('.Timeline-Column-Left')
          .classList.remove('Timeline-Column-Reveal-Left');
        items[i]
          .querySelector('.Timeline-Column-Right')
          .classList.remove('Timeline-Column-Reveal-Right');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div className='Explore-Timeline Explore-Active'>
      <div className='Explore-Timeline-Column Timeline-Column-Left Timeline-Column-Reveal-Left'>
        {props.yearPosition === 'left' ? (
          <div
            style={{
              width: 'calc(100% - 40px)',
              maxWidth: '500px',
              padding: '20px',
              textAlign: 'right',
            }}
          >
            <div className='Explore-Timeline-Year Explore-Year-Right'>
              {props.year}
            </div>
            <img className='Timeline-Picture' alt='' src={props.picture}></img>
          </div>
        ) : (
          <div className='Timeline-Details Timeline-Details-Right'>
            <div className='Timeline-Details-Column'>
              <div className='Timeline-Details-Label'>Project</div>
              <div className='Timeline-Details-Value'>{props.project}</div>
            </div>
            <div className='Timeline-Details-Column'>
              <div className='Timeline-Details-Label'>Position</div>
              <div className='Timeline-Details-Value'>{props.position}</div>
            </div>
            <div className='Timeline-Details-Column'>
              <div className='Timeline-Details-Label'>Technologies</div>
              <div className='Timeline-Details-Tags'>
                {props.technologies.map((t, idx) => {
                  return (
                    <div key={idx} className='Timeline-Tag'>
                      {t}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className='Explore-Timeline-Separator'></div>
      <div className='Explore-Timeline-Column Timeline-Column-Right Timeline-Column-Reveal-Right'>
        {props.yearPosition === 'right' ? (
          <div
            style={{
              width: 'calc(100% - 40px)',
              padding: '20px',
              textAlign: 'left',
            }}
          >
            <div className='Explore-Timeline-Year Explore-Year-Left'>
              {props.year}
            </div>
            <img className='Timeline-Picture' alt='' src={props.picture}></img>
          </div>
        ) : (
          <div className='Timeline-Details Timeline-Details-Left'>
            <div className='Timeline-Details-Column'>
              <div className='Timeline-Details-Label'>Project</div>
              <div className='Timeline-Details-Value'>{props.project}</div>
            </div>
            <div className='Timeline-Details-Column'>
              <div className='Timeline-Details-Label'>Position</div>
              <div className='Timeline-Details-Value'>{props.position}</div>
            </div>
            <div className='Timeline-Details-Column'>
              <div className='Timeline-Details-Label'>Technologies</div>
              <div className='Timeline-Details-Tags'>
                {props.technologies.map((t, idx) => {
                  return (
                    <div key={idx} className='Timeline-Tag'>
                      {t}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
