import './Cover.css';

function Cover() {
  return (
    <div className="cover-container">
      <div
        style={{
          display: 'flex',
          alignItems: 'end',
          justifyContent: 'center',
          gap: '3rem',
        }}
      >
        <h1 className="text-title-xl animate-appear-left">Bruno</h1>
        <h2 className="text-normal-xl animate-appear-left-2x">FullStack</h2>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'center',
          gap: '3rem',
        }}
      >
        <h2 className="text-normal-xl animate-appear-right-2x">Developer</h2>
        <h1 className="text-title-xl animate-appear-right">López</h1>
      </div>
    </div>
  );
}

export default Cover;
