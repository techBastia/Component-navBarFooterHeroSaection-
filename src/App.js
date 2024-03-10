import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { HeroSection } from './pages/HeroSection';
import { Nav } from './component/Nav';
import { Footer } from './component/Footer'
import './styls/style.css'

function App() {
  return (
    <div className="App">
    <Router>
    <Nav />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Hero' element={<HeroSection/>}/>
    </Routes>
    </Router>
    <Footer />
    </div>
  );
}

export default App;
