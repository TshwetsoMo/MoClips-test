import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './Pages/landing';
import Timeline from './Pages/timeline';
import Compare from './Pages/compare';
import BasicNavbar from './Components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BasicNavbar/>
      <Routes>
        <Route path='/' element= { <Landing /> } />
        <Route path='/time' element= { <Timeline/>} />
        <Route path='/cmpare' element= { <Compare/>} />
      </Routes>
    </div>
    
  );
}

export default App;
