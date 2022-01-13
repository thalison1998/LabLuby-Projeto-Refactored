
import { Header } from '../../components/header'
import { Btn, Container, ThStatus } from './styles'
import { InputSearch } from '../../components/search'
 import { useAuthContext } from '../../hooks/UseAuth' 
import { Main } from './styles'
import prevImg from "../../assets/arrow-left.svg";
import nextImg from "../../assets/arrow-right.svg";
import { valueFormer } from '../../utils/valueFormer'


export const CarReservedAndSold= () => {
 const { data} = useAuthContext()
 const { user } = data

 const handleClick = (e:React.MouseEvent<HTMLElement>) => {
  e.preventDefault()
 }
    return (
        <>
        <Header />
        <Main>
        <section>
        <h1>Seus Veículos</h1>
        <Container>
          <div className="wrapper-control">
            <div className="container-control">
              <h2>Listagem de veículos reservados e vendidos</h2>
              <div className="control">
                <form   className="btn-control">

                  <button onClick={handleClick} data-direction="prev" className="prev">
                    <img src={prevImg} alt="prev" />
                    Anterior
                  </button>
                  <Btn onClick={handleClick}>1</Btn>
                  <Btn onClick={handleClick}>2</Btn>
                  <Btn onClick={handleClick}>3</Btn>
                  <button onClick={handleClick} data-direction="next" 
                     className="next">
                    Proximo
                    <img  src={nextImg} alt="next" />
                  </button>

                </form>
                <InputSearch />
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
                { user.vehicles &&  user.vehicles.map((props) =>( 
                   <tr key={props.chassi}>
                        <th>{props.brand}</th>
                        <th>{props.model}</th>
                        <th>{props.yer}</th>
                        <th>{valueFormer(props.km,'km')}</th>
                        <th>{props.color}</th>
                        <th className='status'><ThStatus>{props.status}</ThStatus></th>
                        <th>{props.chassi}</th>
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
