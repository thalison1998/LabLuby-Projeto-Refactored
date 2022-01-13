import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
    --background:#FFF;
    --grey:#A2A2A2;
    --black:#3C3C3C;
    --veryGrey:#7C7C7C;
    --inputBackground:#F9F9F9;
    --inputBorder:#E6E6E6;
    --red:#F54A48;
    --colorTextBasic:#858585;
}

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    text-decoration:none;
    list-style:none;
    font-family: 'Roboto';
}

html{
    font-size: 62.5%;
    
}
    
   /*  @media (max-width: 720px) {
        html{
           font-size:57.6925%; 
        }
    } */

body{
        font-size:1.6rem;
        -webkit-font-smoothing:antialiased;
}

img{
    display:block;
    max-width:100%;
}

button{
    cursor:pointer;
}

`;
