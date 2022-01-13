
import {  Route, Routes } from "react-router-dom";
import { ProtectRouter } from "./helper/protectRouter";
import { Employees } from "./Pages/Employees";
import { Home } from "./Pages/Home/indext";

import { Login } from "./Pages/Login";
import { CarReservedAndSold } from "./Pages/ReservedSold";
import { TotalCar } from "./Pages/TotalCar";

export const ContainerRoutes = () => {

 
  
    return (
      <Routes>
          <Route path="/" 
          element={<Login />}  />
          <Route path="home" 
          element={<ProtectRouter ProtectComponent={<Home />} />} />
          <Route path="home/ListaGeral" 
          element={<ProtectRouter ProtectComponent={<TotalCar />} />} />
          <Route path="home/ListaReservadosEvendidos" 
          element={<ProtectRouter ProtectComponent={<CarReservedAndSold />} />} />
          <Route path="home/ListaFuncionarios" 
          element={<ProtectRouter ProtectComponent={<Employees />} />} />
      </Routes>
    )
}
