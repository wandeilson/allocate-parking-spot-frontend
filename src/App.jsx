import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ParkingSpot from './pages/ParkingSpot';
import Menu from './pages/Menu';
import Apartment from './pages/Apartment';
import './App.css';

function App(){
  return (
    <div>    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu/>}  />
          <Route path='/apartment' element={<Apartment/>}  />
          <Route path='/parkingspot' element={<ParkingSpot/>}  />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App; 