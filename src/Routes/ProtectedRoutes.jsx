import React from 'react';
import Routering from './Routes'
import UserServices from '../Services/UserService';

const userService = new UserServices();

const ProtectedRoutes = ({children}) => {
    const usuarioAutenticado = userService.userAuthenticate();
    console.log("result:", usuarioAutenticado);
  
    return usuarioAutenticado ? children : <Routering/>
}
 
export default ProtectedRoutes;