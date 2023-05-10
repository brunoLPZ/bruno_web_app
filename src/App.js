import './App.css';
import technologyVideo from './assets/technology.mp4';
import keyboard from './assets/keyboard.jpg';

import Cover from './cover/Cover';
import Experience from './experience/Experience';
import { useState } from 'react';
import * as Unicons from '@iconscout/react-unicons';
import { Parallax, Background } from 'react-parallax';
import { useInView } from 'react-intersection-observer';
import Certifications from './certifications/Certifications';
import Contact from './contact/Contact';

function App() {
  const [theme, setTheme] = useState('light');
  const [refHome, homeActive, homeEntry] = useInView({
    /* Optional options */
    threshold: 0.5,
  });
  const [refExperience, experienceActive, experienceEntry] = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  const [refCertifications, certificationsActive, certificationsEntry] =
    useInView({
      /* Optional options */
      threshold: 0.5,
    });

  const [refContact, contactActive, contactEntry] = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  const scrollToSection = (ref) => {
    ref.target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="app" className={theme}>
      <Parallax strength={500}>
        <Background className="custom-bg">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '100vh',
            }}
          >
            <video
              src={technologyVideo}
              autoPlay
              muted
              loop
              style={{
                height: '70%',
                filter:
                  theme === 'dark'
                    ? 'grayscale(1) invert(15%) blur(1px)'
                    : 'grayscale(1) invert(80%) blur(1px)',
              }}
            ></video>
          </div>
        </Background>
        <div className="app-page" ref={refHome}>
          <Cover></Cover>
        </div>
      </Parallax>
      <Parallax
        strength={500}
        renderLayer={(percentage) => (
          <div className="app-page" ref={refExperience}>
            <Experience
              parallaxPercentage={percentage}
              theme={theme}
            ></Experience>
          </div>
        )}
      ></Parallax>
      <Parallax
        strength={500}
        bgImage={keyboard}
        bgClassName={`app-certificate-bg ${theme}`}
        renderLayer={(percentage) => (
          <div className="app-page" ref={refCertifications}>
            <Certifications
              parallaxPercentage={percentage}
              theme={theme}
            ></Certifications>
          </div>
        )}
      ></Parallax>
      <Parallax
        strength={500}
        renderLayer={(percentage) => (
          <div className="app-page" ref={refContact}>
            <Contact parallaxPercentage={percentage} theme={theme}></Contact>
          </div>
        )}
      ></Parallax>
      <div className={`app-navbar ${theme}`}>
        <div
          className={`app-navbar-item ${homeActive ? 'active' : ''}`}
          onClick={() => scrollToSection(homeEntry)}
        >
          <div className={`circle circle-${theme}`}></div>
          <span>Home</span>
        </div>
        <div
          className={`app-navbar-item ${experienceActive ? 'active' : ''}`}
          onClick={() => scrollToSection(experienceEntry)}
        >
          <div className={`circle circle-${theme}`}></div>
          <span>Experience</span>
        </div>
        <div
          className={`app-navbar-item ${certificationsActive ? 'active' : ''}`}
          onClick={() => scrollToSection(certificationsEntry)}
        >
          <div className={`circle circle-${theme}`}></div>
          <span>Certifications</span>
        </div>
        <div
          className={`app-navbar-item ${contactActive ? 'active' : ''}`}
          onClick={() => scrollToSection(contactEntry)}
        >
          <div className={`circle circle-${theme}`}></div>
          <span>Contact</span>
        </div>
      </div>
      <div
        className={'app-theme-btn animate-appear-right-2x ' + theme}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        <Unicons.UilSun
          size={30}
          color={theme === 'light' ? '#dac000' : '#222222'}
        />
        <Unicons.UilMoon
          size={30}
          color={theme === 'dark' ? '#7f7fa3 ' : '#f9f7ee'}
        />
        <div
          className="cloud"
          style={{ top: theme === 'light' ? '38px' : '5px' }}
        >
          <Unicons.UilCloud
            size={30}
            color={theme === 'light' ? '#222222' : '#f9f7ee'}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
