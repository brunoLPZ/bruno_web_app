import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
