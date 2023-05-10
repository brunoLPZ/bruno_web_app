import './Certifications.css';

function Certifications(props) {
  const { parallaxPercentage, theme } = props;

  return (
    <div className="certifications-container">
      <h1
        className="text-title-xl"
        style={{
          position: 'relative',
          top: Math.sin(-1 + Math.min(1, parallaxPercentage)) * 1000,
          opacity: Math.min(1, parallaxPercentage),
        }}
      >
        Certifications
      </h1>
      <div
        style={{
          position: 'relative',
          left:
            Math.sin(-1 + Math.pow(Math.min(1, parallaxPercentage), 2)) * 1000,
        }}
      >
        <h2 className="text-normal-xl">Jan 2023</h2>
        <h2 className="text-normal">
          eLearnSecurity Junior Penetration Tester v2 (eJPTv2)
        </h2>
        <hr></hr>
      </div>
    </div>
  );
}

export default Certifications;
