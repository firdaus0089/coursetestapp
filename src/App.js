import logo from './logo.svg';
import { Routes, Route } from "react-router-dom"
import NavBar from './NavBar';
import Home from './Home';
import Locations from './Locations';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/locations' element={<Locations />} />
      </Routes>
    </div>
  );
}

export default App;
