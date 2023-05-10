import './Contact.css';
import * as Unicons from '@iconscout/react-unicons';

function Contact(props) {
  const { parallaxPercentage, theme } = props;

  return (
    <div className="contact-container">
      <h1
        className="text-title-xl"
        style={{
          position: 'relative',
          top: Math.sin(-1 + Math.min(1, parallaxPercentage)) * 1000,
          opacity: Math.min(1, parallaxPercentage),
        }}
      >
        Contact
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          className={`contact-circle ${theme}`}
          style={{
            opacity: Math.min(1, parallaxPercentage),
            width: `${Math.min(1, parallaxPercentage - 0.5) * 2000}px`,
          }}
        >
          <div className="contact-item">
            <p>Email</p>
            <a href="mailto:bruno.lopez.trigo@gmail.com">
              <Unicons.UilEnvelope size={70} />
            </a>
          </div>
          <div className="contact-item">
            <p>Linkedin</p>
            <a href="https://www.linkedin.com/in/brunolopeztrigo/">
              <Unicons.UilLinkedin size={70} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
