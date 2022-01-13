import React from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/Global";
import { ContainerRoutes } from "./Routes";
import { AuthProvider } from "./contexts/authProvider";

const  App = ():JSX.Element => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ContainerRoutes />
        <GlobalStyles />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
