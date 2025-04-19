import LandingPage from './LandingPage';
import Counter from './Counter';
import NavBar from './NavBar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/counter" element={<Counter/>}/>
      </Routes>
    </Router>
    
  )
}

export default App;
