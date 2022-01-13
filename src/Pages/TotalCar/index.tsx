
import { Header } from '../../components/header'
import { Btn, Container, ThStatus } from './styles'
import { InputSearch } from '../../components/search'
 import { useAuthContext } from '../../hooks/UseAuth' 
import { Main } from './styles'
import prevImg from "../../assets/arrow-left.svg";
import nextImg from "../../assets/arrow-right.svg";
import { UsePagination } from '../../hooks/UsePagination'
import { valueFormer } from '../../utils/valueFormer'


export const TotalCar = () => {
const {totalData, setPageVehicles, setFilterVehicles} = useAuthContext()
  
const {pageSelect} = UsePagination(setPageVehicles);
  
const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
  setFilterVehicles(e.target.value)
}

    return (
        <>
        <Header />
        <Main>
        <section>
        <h1>Todos Veículos</h1>
        <Container>
          <div className="wrapper-control">
            <div className="container-control">
              <h2>Listagem geral de veículos</h2>
              <div className="control">
                <div className="btn-control">

                 <button data-direction="prev" onClick={pageSelect} className="prev">
                    <img src={prevImg} alt="prev" />
                    Anterior
                    </button>
                    <Btn 
                     currentPage={totalData.currentPage} 
                     className='btn' 
                     onClick={pageSelect}>1</Btn>

                    <Btn 
                    currentPage={totalData.currentPage}
                    className='btn'
                    onClick={pageSelect}>2</Btn>

                    <Btn 
                    currentPage={totalData.currentPage} 
                    className='btn'
                    onClick={pageSelect}>3</Btn>

                    <button data-direction="next" 
                    onClick={pageSelect} className="next">
                    Proximo
                    <img src={nextImg} alt="next" />
                  </button>

                </div>
                
                <InputSearch onChange={handleChange}/>
              </div>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Marca</th>
                  <th>Modelo</th>
                  <th>Ano</th>
                  <th>Km</th>
                  <th>Cor</th>
                  <th className='status'>Status</th>
                  <th>Chassi</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                {totalData.vehicles && totalData.vehicles.map((props) =>( 
                   <tr key={props.chassi}>
                        <th>{props.brand}</th>
                        <th>{props.model}</th>
                        <th>{props.yer}</th>
                        <th>{valueFormer(props.km,'km')}</th>
                        <th>{props.color}</th>
                        <th className='status'><ThStatus>{props.status}</ThStatus></th>
                        <th>{valueFormer(props.chassi,'chassi')}</th>
                        <th>{valueFormer(props.value,'money')}</th>
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
