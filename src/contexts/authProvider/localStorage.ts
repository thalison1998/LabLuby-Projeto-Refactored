
import { api } from "../../services/api";



export const setUserStorage = (value:string) => {
    localStorage.setItem('user',value)
}

export const getUserStorage = () => {
    const json = localStorage.getItem('user');

    if(!json) {
        return null
    }

    const user = JSON.parse(json);
    
    return user ?? null;
}

export const loginRequest = async (email:string, password:string) => {
    
    try{
        const request = await api.post('login', {email, password});
        return request.data
    }catch(error){
        return null
    }

}