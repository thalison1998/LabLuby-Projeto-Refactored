import styled from "styled-components";

export const Label = styled.label ` 
display: flex;
position: relative;
margin:0;
flex: 1;
  img{
      position: absolute;
      right: 12px;
      top:11px;
  }
  input{
      height: 44px;
      padding-left:15px;
      background: #F9F9F9;
      border: 1px solid #E6E6E6;
      box-sizing: border-box;
      box-shadow: 0px 0px 6px rgba(162, 162, 162, 0.25);
      border-radius: 3px;
      flex:1;
  }
`