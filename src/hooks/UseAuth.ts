import { useContext } from "react";
import { AuthContext } from "../contexts/authProvider";


export const useAuthContext = () => {
    const context = useContext(AuthContext);
    return context
}