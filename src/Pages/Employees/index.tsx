import React from 'react'
import { useAuthContext } from '../../hooks/UseAuth'
import { Btn, Container } from './styles'
import { InputSearch } from '../../components/search'
 
import { Main } from './styles'
import prevImg from "../../assets/arrow-left.svg";
import nextImg from "../../assets/arrow-right.svg";
import { Header } from '../../components/header'
import { UsePagination } from '../../hooks/UsePagination'
import { valueFormer } from '../../utils/valueFormer'
export const Employees = () => {

    const {employeeData, setPageEmployees} = useAuthContext()
     
    const {pageSelect} = UsePagination(setPageEmployees)
    

    return (
        <>
        <Header />
        <Main>
        <section>
        <h1>Funcionários</h1>
        <Container>
          <div className="wrapper-control">
            <div className="container-control">
              <h2>Listagem de funcionários da empresa</h2>
              <div className="control">
                <form className="btn-control">
                <button data-direction="prev" onClick={pageSelect} className="prev">
                    <img src={prevImg} alt="prev" />
                    Anterior
                    </button>
                    <Btn 
                     currentPage={employeeData.currentPage} 
                     className='btn' 
                     onClick={pageSelect}>1</Btn>

                    <Btn 
                    currentPage={employeeData.currentPage}
                    className='btn'
                    onClick={pageSelect}>2</Btn>

                    <Btn 
                    currentPage={employeeData.currentPage} 
                    className='btn'
                    onClick={pageSelect}>3</Btn>

                    <button data-direction="next" 
                    onClick={pageSelect} className="next">
                    Proximo
                    <img src={nextImg} alt="next" />
                  </button>
                </form>
                <InputSearch />
              </div>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>email</th>
                  <th>cpf</th>
                  <th>valor</th>
                  <th>bio</th>
                </tr>
              </thead>
              <tbody>
                 {employeeData.employees && employeeData.employees.map((props) =>( 
                   <tr key={props.cpf}>
                        <th>{props.name}</th>
                        <th>{props.email}</th>
                        <th>{valueFormer(props.cpf,'cpf')}</th>
                        <th>{valueFormer(props.salary,'money')}</th>
                        <th>{props.bio}</th>
                   </tr>
                ))} 
              </tbody>
            </table>
          </div>
        </Container>
            </section>
        </Main>
        </>
    )
}
