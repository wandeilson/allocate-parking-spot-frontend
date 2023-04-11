import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ParkingSpot from './pages/ParkingSpot';
import Menu from './pages/Menu';
import Apartment from './pages/Apartment';
import 'bootswatch/dist/cosmo/bootstrap.css';
import './App.css';
import ListApartment from './pages/ListApartments';
import { useEffect, useState } from 'react';

function App(){

  //Obj Apartment
  const apartment = {
    idApartment: 0,
    block: '',
    nameLocator: '',
    number: '',
    parkingSpot:{
      idParkingSpot: 0,
      number: ''
    },
  }


  //UseState
  const [apartments, setApartments] = useState([]);
  const [objApartment, setObjApartment] = useState(apartment);

  //UseEffect
  useEffect( ()=>{
    fetch("http://localhost:8080/api/apartment")
    .then(retorno => retorno.json() )
    .then(retorno_convertido => setApartments(retorno_convertido));
  }, []);

  //Obtendo dados do listApartment

  return (
    <div> 
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu/>}  />
          <Route path='/apartment' element={<Apartment/>}  />
          <Route path='/parkingspot' element={<ParkingSpot/>}  />
          <Route path='/listapartment' element={<ListApartment list={apartments} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App; 