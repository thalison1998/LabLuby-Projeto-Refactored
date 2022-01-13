import React from 'react'
import { Logo } from '../Logo'
import { Container } from './style'
import logOut from '../../assets/log-out.svg'
import { useAuthContext } from '../../hooks/UseAuth'
import { InputSearch } from '../search'
import { useNavigate } from 'react-router-dom'

type PropsHead = {
    searchActive?:boolean;
}

export const Header = (props:PropsHead) => {

    const {logout} = useAuthContext()
    const navigation = useNavigate()
    const redirectHome = () => {
        navigation('/home')
    }
    return (
        <Container> 
            <div className='wrapper'>
                <div style={{cursor:'pointer'}} onClick={redirectHome}>
                    <Logo />
                </div>
                
                <form className='search'>
                    {props.searchActive &&  <InputSearch /> }
                </form>

                <button onClick={logout}>
                    <span>Sair</span>
                    <img src={logOut} alt="Logout" /> 
                </button>
            </div>
        </Container>
    )
}
