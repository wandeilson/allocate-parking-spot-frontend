import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ParkingSpot from './pages/ParkingSpot';
import Menu from './pages/Menu';
import Home from './pages/Home';
import Apartment from './pages/Apartment';
import 'bootswatch/dist/cosmo/bootstrap.css';
import './App.css';
import ListApartment from './pages/ListApartments';
import { useEffect, useState } from 'react';
import ListSpots from './pages/ListSpots';

function App(){

  //Objeto Apartment
  const apartment = {
    block: '',
    number: '',
    nameLocator: ''
  }

  //Objeto ParkingSpot
  const parkingSpot = {
    number: ''
  }

  //UseState
  const [apartments, setApartments] = useState([]);
  const [parkingSpots, setParkingSpots] = useState([]);
  const [objApartment, setObjApartment] = useState(apartment);
  const [objParkingSpot, setObjParkingSpot] = useState(parkingSpot);

  //Obtendo dados do form de Apartment
  const aoDigitarApt = (e) =>{
    setObjApartment({...objApartment, [e.target.name]:e.target.value});
  }

  //Obtendo dados do form de Apartment
  const aoDigitarPkSpot = (e) =>{
    setObjParkingSpot({...objParkingSpot, [e.target.name]:e.target.value});
  }

  //UseEffect GET All Apartments
  useEffect( ()=>{
    fetch("http://localhost:8080/api/apartment")
    .then(retorno => retorno.json() )
    .then(retorno_convertido => setApartments(retorno_convertido));
  }, []);

    //UseEffect GET All Parkings Spots
    useEffect( ()=>{
      fetch("http://localhost:8080/api/parking-spot")
      .then(retorno => retorno.json() )
      .then(retorno_convertido => setParkingSpots(retorno_convertido));
    }, []);

    //Create ParkingSpot
    const createParkingSpot = () =>{
      fetch("http://localhost:8080/api/parking-spot",{
        method:'post',
        body:JSON.stringify(objParkingSpot),
        headers:{
          'Content-type':'application/json',
          'Accept':'application/json'
        }
      })
      .then(retorno => retorno.json())
      .then(retorno_convertido =>{
        alert("Vaga cadastrada com sucesso!");
        cleanForm(parkingSpot);
      })
    }


  //Create Apartment
    const createApartment = () =>{
      fetch("http://localhost:8080/api/apartment",{
        method:'post',
        body:JSON.stringify(objApartment),
        headers:{
          'Content-type':'application/json',
          'Accept':'application/json'
        }
      })
      .then(retorno => retorno.json())
      .then(retorno_convertido =>{
        alert("Apartamento cadastrado com sucesso!");
        cleanForm(apartment);
      })
    }

    // Clean form
    const cleanForm = (objeto) =>{
      setObjApartment(objeto);
      setObjParkingSpot(objeto);
    }

  return (
    <div> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/apartment' element={<Apartment  eventKeyboard={aoDigitarApt} create={createApartment} obj={objApartment} />} />
          <Route path='/parkingspot' element={<ParkingSpot  eventKeyboard={aoDigitarPkSpot} create={createParkingSpot} obj={objParkingSpot}  />}/>
          <Route path='/listapartment' element={<ListApartment listApartments={apartments}/>}/>
          <Route path='/listspot'  element={<ListSpots listParkingSpots={parkingSpots} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App; 