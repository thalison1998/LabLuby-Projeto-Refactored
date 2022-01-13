import styled from "styled-components";

export const Main = styled.main`
  max-width: 1623px;
  margin: 55px auto 0 auto;
  padding: 0 10px;
  h1 {
    font-weight: 600;
    font-size: 3rem;
    color: #495057;
  }
`;

export const Container = styled.div`
  background: #ffffff;
  border: 1px solid #e6e6e6;
  box-sizing: border-box;
  box-shadow: 0px 0px 6px rgba(162, 162, 162, 0.25);
  border-radius: 3px;
  margin-top: 30px;

  .wrapper-control {
    display: grid;
    
    padding: 25px 15px 25px 30px;
  }

  .control {
    display: flex;
    align-items: center;
    width: 559px;
    justify-content: space-between;
  }
  .container-control {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }
  .btn-control {
    display: flex;
    align-items: center;
    margin-right:40px;
  }
  .prev,
  .next {
    display: flex;
    align-items: center;
    padding: 5px 9.5px;
    font-weight: 600;
    font-size: 1.4rem;
    color: #858585;
    border:none;
  }
  .prev{
    background:#EDEDED;
    img{
      margin-right:8px;
    }
    
  }
  .next{
    background: none;
    img{
      margin-left:8px;
    }
  }
  

  table {
    border-spacing: 0 0.5rem;
    width:100%;
 
    th {
      padding: 25px 10px;
      text-align: start;
    }
    thead {
      background: var(--inputBackground);
      border-radius: 3px;
      th {
        font-weight: 700;
        font-size: 1.3rem;
        text-transform: uppercase;
        color: var(--colorTextBasic);
      }
    }

    tbody {
      th {
        font-weight: 500;
        font-size: 1.6rem;
        color: #495057;
      }
    }

   
  }
`;


type PropsBtn = {
  currentPage:number;
  children: string;
}



const on = {
  color:'#fff',
  background:'#F54A48',
}
const off = {
  color:'#858585',
  background:'none',
}

export const Btn = styled.button <PropsBtn> `
    padding: 4.5px 8.5px;
    margin:0 7.5px ;
    border-radius:3px;
    font-weight: 600;
    font-size: 1.3rem;
    border:none;

    ${props => {
      return props.currentPage === Number(props.children) ? on:off
    }}
    
`