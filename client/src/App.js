import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import Nomatch from './components/shared/Nomatch';
import Navbar from './components/shared/Navbar';
import Billboards from './components/billboards/Billboards';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/billboards' element={<Billboards />} />
      <Route path='*' element={<Nomatch />} />
    </Routes>
  </>
)

export default App;
