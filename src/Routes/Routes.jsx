import React from "react";
import Login from "../pages/Login/index";
import Register from '../pages/Register/index';
import ParkingSpot from '../pages/Parking-spot/ParkingSpot';
import Apartment from '../pages/Apartment/Apartment';
import Home from "../pages/Home/Home";
import ListApartment from '../pages/Apartment/ListApartments';
import ListSpots from '../pages/Parking-spot/ListParkingSpots';
import ProtectedRoutes from "./ProtectedRoutes";

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import UserServices from '../Services/UserService';


const userService = new UserServices();

const Routering = () => {
  return ( 
    <Router>
      <Routes>
        <Route path="/login" element={ userService.userAuthenticate()? <Navigate to={"/Home"} /> : <Login/>} />
        <Route path="/register" element={ userService.userAuthenticate()? <Navigate to={"/Home"}/> : <Register/>} />
        <Route path="/home" element={ userService.userAuthenticate()? <Home/> : <Navigate to={"/login"} />} />
        <Route path="/apartment" element={ userService.userAuthenticate()? <Navigate to={"/apartment"}/>: <Login/> } />
        <Route path="/parkingSpot" element={ userService.userAuthenticate()? <Navigate to={"/parkingspot"}/>: <Login/> } />
        <Route path="/listapartment" element={ userService.userAuthenticate()? <Navigate to={"/listapartment"}/>: <Login/> } />
        <Route path="/listparkingSpot" element={ userService.userAuthenticate()? <Navigate to={"/listparkingSpot"}/>: <Login/> } />
           
      </Routes>
    </Router>
   );
}
 
export default Routering;