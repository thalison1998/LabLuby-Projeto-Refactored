import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/header";
import { useAuthContext } from "../../hooks/UseAuth";
import { Container } from "./styles";
import carImg1 from "../../assets/frame-car1.jpg";
import carImg2 from "../../assets/frame-car2.jpg";
import employeeImg from "../../assets/client.jpg";


export const Home = () => {
    const searchActive = true
    const { data } = useAuthContext()
    const{ user} = data;
  

  return (
    <>
      <Header searchActive={searchActive}/>
      <Container>
        <section>
          <div className="wrapper-text">
            <h1>Bem-vindo, {user && user.name}</h1>
            <p>Menu</p>
          </div>
          <div className="links">
            <Link to="ListaReservadosEvendidos" className="link">
              <div className="card-text">
                <div>
                  <h2>Veículos reservados e vendidos</h2>
                  <p>Veículos reservados e vendidos por você</p>
                </div>
                <span>{data.totalVehiclesLoggedUser} Veículos</span>
              </div>
              <img src={carImg1} alt="" />
            </Link>
            <Link to="ListaGeral" className="link">
            <div className="card-text">
                <div>
                  <h2>Listagem geral de veículos</h2>
                  <p>Listagem de veículos de toda a empresa</p>
                </div>
                <span>{data.totalVehicles} Veículos</span>
              </div>
              <img src={carImg2} alt="" />
            </Link>

            <Link to="ListaFuncionarios" className="link">
            <div className="card-text">
                <div>
                  <h2>Funcionários da empresa</h2>
                  <p>Listagem de todos os funcionários da empresa</p>
                </div>
                <span>{data.totalEmployees} funcionários</span>
              </div>
              <img src={employeeImg} alt="" />
            </Link>
          </div>
        </section>
      </Container>
    </>
  );
};
