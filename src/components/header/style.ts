import styled from "styled-components";

export const Container = styled.header `
padding:31.5px 0;
box-shadow: 0px 2px 25px rgba(169, 169, 169, 0.2);
    .wrapper{
        max-width: 1770px;
        margin:0 auto;
        padding:0 10px;
        display: flex;
        justify-content:space-between;
        align-items:center;
        
    }
    button {
        display: flex;
        height: 38px;
        width: 75px;
        align-items:center;
        padding:10px;
        background:var(--red);
        border-radius: 3px;
        border:none;
        span{
            margin-right:10px;
            font-weight: 600;
            font-size: 1.4rem;
            color: #FFFFFF;
        }
    }
    .search{
        width:430px;
        
        input{
            width: 100%;
        }
    }
`
