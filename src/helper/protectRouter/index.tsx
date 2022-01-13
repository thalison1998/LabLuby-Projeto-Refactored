import React from 'react'
import { useAuthContext } from '../../hooks/UseAuth'


type PropsProtect = {
    ProtectComponent:JSX.Element
}

export const ProtectRouter = ({ProtectComponent}:PropsProtect) => {

    const {token} = useAuthContext()
    if(!token) return <></>
    return (
        <>
        {ProtectComponent}
        </>
    )
}
