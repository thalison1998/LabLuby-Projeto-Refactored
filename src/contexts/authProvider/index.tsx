import React, { createContext } from "react";

import { useNavigate } from "react-router-dom";



import { api } from "../../services/api";
import { PropsContext, PropsData, PropsEmployees, PropsTotal, ProviderProps } from "../../types";
import { getUserStorage, loginRequest, setUserStorage } from "./localStorage";

export const AuthContext = createContext<PropsContext>({} as PropsContext);


export const AuthProvider = ({ children }: ProviderProps) => {


  const [data, setData] = React.useState< PropsData >({} as  PropsData);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [token, setToken] = React.useState(null);
  const [totalData, setTotalData] = React.useState<PropsTotal>({} as PropsTotal)
  const [employeeData, setEmployeeData] = React.useState<PropsEmployees>({} as PropsEmployees)
  
  const [pageVehicles, setPageVehicles] = React.useState(1)
  const [pageEmployees, setPageEmployees] = React.useState(1);
  const [filterVehicles, setFilterVehicles] = React.useState('')
  const navigation = useNavigate();

  React.useEffect(() => {
    const user = getUserStorage();
    (async () => {
      if (user) {
        setToken(user.token);
        const response = await loginRequest(user.email, user.password);
        setData(response);
        
      }
    })();
  }, []);

  const authenticate = async (email: string, password: string) => {
    try {
      setLoading(true);
      const response = await api.post("login", { email, password });
      const payload = { token: response.data.token, email, password };
      setUserStorage(JSON.stringify(payload));
      setData(response.data);
      setToken(response.data.token);
      navigation("home");
      setLoading(false);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
      setError(false);
    }
  };

  const logout = () => {
    setToken(null)
    window.localStorage.removeItem("user");
    navigation("/");
  };

  React.useEffect(() => {
    (async () => {
      try{
        
        if (token !== null) {
        setLoading(true)
        const response = await api.get(`vehicles?page=${pageVehicles}&model=${filterVehicles}`, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        setTotalData(response.data)
        setLoading(false)
      }
      }catch(err){
        console.log(err)
      }
    })();
  }, [token,pageVehicles,filterVehicles]);

  React.useEffect(() => {
    (async () => {
      try{
        
        if (token !== null) {
        setLoading(true)
        const response = await api.get(`employees?page=${pageEmployees}`, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        setEmployeeData(response.data)
        setLoading(false)
       
      }
      }catch(err){
        console.log(err)
      }
    })();
  }, [token,pageEmployees]);



  return (
    <AuthContext.Provider
      value={{ data, authenticate, logout, loading, error, token,totalData,employeeData, setPageVehicles,setPageEmployees,setFilterVehicles  }}
    >
      {children}
    </AuthContext.Provider>
  );
};
