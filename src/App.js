import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
